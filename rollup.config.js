import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: [
    './bundler/lodash-es.js',
    './bundler/floating-ui.js',
    './bundler/ajv.js',
    './bundler/ajv-formats.js',
    './bundler/date-fns.js',
  ],
  output: {
    dir: './public/deps',
    format: 'esm',
  },
  external: [],
  plugins: [
    resolve(),
    commonJs({
      include: 'node_modules/**',
    }),
    json(),
  ],
}
