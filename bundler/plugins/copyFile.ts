import path from 'path'
import fs from 'fs'
import type { Plugin } from 'vite'

export const copyFilePlugin = (): Plugin => {
  const resetScrollCss = path.resolve('bundler/reset-scroll.default.css')
  const resetCss = path.resolve('bundler/reset.default.css')

  return {
    name: 'vite-plugin-copy-file',
    buildStart() {
      fs.copyFileSync(resetScrollCss, path.resolve('public/reset-scroll.default.css'))
      fs.copyFileSync(resetCss, path.resolve('public/reset.default.css'))
    },
  }
}
