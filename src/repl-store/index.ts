import { reactive, watchEffect } from 'vue'
import * as defaultCompiler from 'vue/compiler-sfc'
import vuePkg from 'vue/package.json'
import iduxPkg from '@idux/components/package.json'
import { File, compileFile } from '@vue/repl'
import type { OutputModes, SFCOptions, Store, StoreState } from '@vue/repl'
import type { ReplStoreParam, VersionRecord } from '@/types'
import { defaultFile, playgroundApp, setupIdux } from '@/const'
import { decodeData, encodeData } from '@/utils'

import playgroundAppCode from '@/template/PlaygroundApp.vue?raw'
import defaultCode from '@/template/App.vue?raw'
import iduxCode from '@/template/setupIdux.js?raw'

const getInitFiles = (serializedState = '') => {
  let files: StoreState['files'] = {
    [playgroundApp]: new File(playgroundApp, playgroundAppCode, true),
    [defaultFile]: new File(defaultFile, defaultCode),
  }
  if (serializedState) {
    try {
      files = {}
      const res = JSON.parse(decodeData(serializedState))
      for (const filename of Object.keys(res)) {
        const isHidden = filename === playgroundApp
        files[filename] = new File(filename, res[filename], isHidden)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return files
}

export class ReplStore implements Store {
  state: StoreState
  compiler = defaultCompiler
  options?: SFCOptions
  versions: VersionRecord
  initialShowOutput = false
  initialOutputMode: OutputModes = 'preview'

  private defaultVueRuntimeURL = ''

  constructor({
    serializedState = '',
    versions = { Vue: vuePkg.version, Idux: iduxPkg.version },
    defaultVueRuntimeURL = './vue.esm-browser.js',
  }: ReplStoreParam) {
    const files = getInitFiles(serializedState)
    const mainFile = files[playgroundApp] ? playgroundApp : Object.keys(files)[0]
    this.state = reactive({
      mainFile,
      files,
      activeFile: files[defaultFile],
      errors: [],
      vueRuntimeURL: defaultVueRuntimeURL,
    })
    this.defaultVueRuntimeURL = defaultVueRuntimeURL
    this.versions = versions
    this.initImportMap()
  }

  private initImportMap() {
    if (!this.state.files['import-map.json']) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify({
          imports: {
            vue: this.defaultVueRuntimeURL,
            '@idux/components': './idux-components.js',
            '@idux/cdk': './idux-cdk.js',
            '@idux/pro': './idux-pro.js',
          }
        }, null, 2)
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

  async initStore() {
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
        this.state.activeFile = this.state.files[defaultFile]
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
      .filter(([file]) => file !== setupIdux && file !== 'import-map.json')
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
