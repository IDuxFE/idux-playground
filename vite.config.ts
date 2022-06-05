import path from 'path'
import { Plugin, defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { IduxResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import fs from 'fs'

const pathSrc = path.resolve(__dirname, 'src')
const copyDepPlugin = (): Plugin => {
  const vueDep = path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-browser.js')
  const iduxCssDep = path.resolve(__dirname, 'node_modules/@idux/components/default.min.css')
  const esModuleShims = path.resolve(__dirname, 'node_modules/es-module-shims/dist/es-module-shims.wasm.js')

  return {
    name: 'vite-plugin-copy-dep',
    buildStart() {
      fs.copyFileSync(vueDep, path.resolve('public/vue.esm-browser.js'))
      fs.copyFileSync(iduxCssDep, path.resolve('public/idux-components.default.min.css'))
      fs.copyFileSync(esModuleShims, path.resolve('public/es-module-shims.wasm.js'))
    },
  }
}

export default defineConfig(async () => {

  return {
    base: './',
    resolve: {
      alias: {
        '@': pathSrc,
      },
    },
    server: {
      port: 2022,
    },
    plugins: [
      copyDepPlugin(),
      vue({
        reactivityTransform: `${pathSrc}/**/*`,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        resolvers: [IduxResolver()],
        dts: path.resolve(`${pathSrc}/types/dts`, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [IduxResolver()],
        dts: path.resolve(`${pathSrc}/types/dts`, 'components.d.ts'),
      }),
      Unocss({
        presets: [presetUno()],
      }),
      Inspect(),
    ],
  }
})
