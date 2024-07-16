import path from 'path'
import { copyFileSync, readFileSync, readdirSync, writeFileSync } from 'fs'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { IduxResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import { copyFilePlugin } from './bundler/plugins/copyFile'

import { esmoduleUrlBase } from './src/const/shared'

const pathSrc = path.resolve(__dirname, 'src')

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
      copyFilePlugin(),
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
      {
        name: 'replace-unpkg',
        enforce: 'post',
        closeBundle() {
          const assetsDir = path.resolve(__dirname, './dist/assets')
          try {
            readdirSync(assetsDir).forEach((file) => {
              try {
                const filePath = path.resolve(assetsDir, file)
                const content = readFileSync(filePath, 'utf-8')

                copyFileSync(
                  path.resolve(
                    __dirname,
                    './node_modules/es-module-shims/dist/es-module-shims.wasm.js'
                  ),
                  path.resolve(__dirname, './dist/deps/es-module-shims.wasm.js')
                )

                if (content.includes('https://unpkg.com/')) {
                  writeFileSync(
                    filePath,
                    content
                      .replace(
                        `https://unpkg.com/es-module-shims@1.5.18/dist/es-module-shims.wasm.js`,
                        `./deps/es-module-shims.wasm.js`
                      )
                      .replace(/https:\/\/unpkg.com\//g, `https:${esmoduleUrlBase}`),
                    'utf-8'
                  )
                }
              } catch (err) {
                void 0
              }
            })
          } catch (err) {
            void 0
          }
        },
      },
    ],
  }
})
