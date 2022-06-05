import { saveAs } from 'file-saver'
import indexHtml from './template/index.html?raw'
import mainJs from './template/main.js?raw'
import iduxJs from './template/idux.js?raw'
import pkgJson from './template/package.json?raw'
import viteCfg from './template/vite.config.js?raw'
import readme from './template/Readme.md?raw'
import type { ReplStore } from '@/repl-store'

export const downloadProject = async (store: ReplStore) => {
  const excludes = ['setupIdux.js', 'import-map.json']
  const { default: JSZip } = await import('jszip')
  const jsZip = new JSZip()

  jsZip.file('index.html', indexHtml)
  jsZip.file('package.json', pkgJson)
  jsZip.file('vite.config.js', viteCfg)
  jsZip.file('README.md', readme)

  const srcFolder = jsZip.folder('src')
  srcFolder?.file('main.js', mainJs)
  srcFolder?.file('idux.js', iduxJs)

  const files = store.getFiles()
  for (const file in files) {
    if (excludes.includes(file)) {
      continue
    }
    let code = files[file]
    if (file === 'PlaygroundApp.vue') {
      code = code
        .replace("import { setupIdux } from './setupIdux.js'\n", '')
        .replace('setupIdux()', '')
    }
    srcFolder?.file(file, code)
  }

  const blob = await jsZip.generateAsync({ type: 'blob' })
  saveAs(blob, 'idux-starter.zip')
}
