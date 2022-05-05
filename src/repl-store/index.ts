import { reactive, watchEffect } from 'vue'
import * as defaultCompiler from 'vue/compiler-sfc'
import { File, compileFile } from '@vue/repl'
import type { OutputModes, SFCOptions, Store, StoreState } from '@vue/repl'
import type { PendingCompiler, ReplStoreParam, VersionKey, VersionRecord } from '@/types'
import { defaultCode, defaultFile, genImportsMap, iduxCode, setupIdux } from '@/const'
import { decodeData, encodeData, genLink } from '@/utils'

const getInitFiles = (serializedState = '') => {
  let files: StoreState['files'] = {
    [defaultFile]: new File(defaultFile, defaultCode)
  }
  if (serializedState) {
    try {
      files = {}
      const res = JSON.parse(decodeData(serializedState))
      for (const filename of Object.keys(res)) {
        files[filename] = new File(filename, res[filename])
      }
    } catch (err) {
      console.log(err)
    }
  }

  return files
}

const genVueLink = (version: string) => {
  const compilerSfc = genLink(
    '@vue/compiler-sfc',
    version,
    '/dist/compiler-sfc.esm-browser.js',
  )
  const runtimeDom = genLink(
    '@vue/runtime-dom',
    version,
    '/dist/runtime-dom.esm-browser.js',
  )

  return {
    compilerSfc,
    runtimeDom,
  }
}

const genImports = (versions: VersionRecord) => {
  const deps = {
    ...genImportsMap(versions),
  }

  return Object.fromEntries(
    Object.entries(deps).map(([key, info]) => [key, genLink(info.pkg, info.version, info.file)])
  )
}

export class ReplStore implements Store {
  state: StoreState
  compiler = defaultCompiler
  options?: SFCOptions
  versions: VersionRecord
  initialShowOutput = false
  initialOutputMode: OutputModes = 'preview'
  private pendingCompiler: PendingCompiler = null

  constructor({
    serializedState = '',
    versions = { Vue: 'latest', iDux: 'latest' },
  }: ReplStoreParam) {
    const files = getInitFiles(serializedState)
    const mainFile = files[defaultFile] ? defaultFile : Object.keys(files)[0]
    this.state = reactive({
      mainFile,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: '',
    })
    this.versions = versions
    this.initImportMap()
  }

  private initImportMap() {
    if (!this.state.files['import-map.json']) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify({ imports: {} }, null, 2)
      )
    }
  }

  public getImportMap() {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    } catch (e) {
      this.state.errors = [
        `Syntax error in import-map.json: ${(e as Error).message}`,
      ]
      return {}
    }
  }

  private setImportMap(map: { imports: Record<string, string> }) {
    try {
      this.state.files['import-map.json'].code = JSON.stringify(map, null, 2)
    } catch (e) {
      this.state.errors = [
        `stringify error in import-map.json: ${(e as Error).message}`,
      ]
    }
  }

  private addDeps() {
    const importMap = this.getImportMap()
    importMap.imports = {
      ...importMap.imports,
      ...genImports(this.versions),
    }
    this.setImportMap(importMap)
  }

  public async setVersion(key: VersionKey, version: string) {
    switch (key) {
      case 'iDux':
        await this.setIduxVersion(version)
        break
      case 'Vue':
        await this.setVueVersion(version)
        break
    }
  }

  private async setIduxVersion(version: string) {
    this.versions.iDux = version
    this.addDeps()
  }

  private async setVueVersion(version: string) {
    const { compilerSfc, runtimeDom } = genVueLink(version)

    this.pendingCompiler = import(/* @vite-ignore */compilerSfc)
    this.compiler = await this.pendingCompiler
    this.pendingCompiler = null

    this.state.vueRuntimeURL = runtimeDom

    this.versions.Vue = version

    this.addDeps()
  }

  async initStore() {
    await this.setVueVersion(this.versions.Vue)
    this.state.files[setupIdux] = new File(
      setupIdux,
      iduxCode,
      true
    )

    watchEffect(() => compileFile(this, this.state.activeFile))

    for (const file of Object.keys(this.state.files)) {
      if (file !== defaultFile) {
        compileFile(this, this.state.files[file])
      }
    }
  }

  setActive(filename: string) {
    this.state.activeFile = this.state.files[filename]
  }

  // 新增文件
  public addFile(fileOrFilename: string | File) {
    const file = typeof fileOrFilename === 'string' ?
      new File(fileOrFilename) :
      fileOrFilename
    this.state.files[file.filename] = file

    if (!file.hidden) this.setActive(file.filename)
  }

  // 删除文件
  public deleteFile(filename: string) {
    if (window?.confirm(`Confirm to delete ${filename}?`)) {
      if (this.state.activeFile.filename === filename) {
        this.state.activeFile = this.state.files[this.state.mainFile]
      }
      delete this.state.files[filename]
    }
  }

  public getFiles() {
    const exported: Record<string, string> = {}
    for (const filename of Object.keys(this.state.files)) {
      exported[filename] = this.state.files[filename].code
    }
    return exported
  }

  async setFiles(newFiles: Record<string, string>, mainFile = defaultFile) {
    const files: Record<string, File> = {}
    if (mainFile === defaultFile && !newFiles[mainFile]) {
      files[mainFile] = new File(mainFile, defaultCode)
    }
    for (const [filename, file] of Object.entries(newFiles)) {
      files[filename] = new File(filename, file)
    }
    for (const file of Object.values(files)) {
      await compileFile(this, file)
    }
    this.state.mainFile = mainFile
    this.state.files = files
    this.initImportMap()
    this.setActive(mainFile)
  }

  serialize() {
    const arr = Object
      .entries(this.getFiles())
      .filter(([file]) => file !== setupIdux)
      .map(([file, content]) => {
        if (file === 'import-map.json') {
          try {
            const importMap = JSON.stringify(this.getImportMap(), null, 2)
            return [file, importMap]
            // eslint-disable-next-line no-empty
          } catch { }
        }
        return [file, content]
      })
    const data = JSON.stringify(Object.fromEntries(arr))
    return `#${encodeData(data)}`
  }
}
