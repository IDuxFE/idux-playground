import resolve from '@rollup/plugin-node-resolve'

export default {
  input: [
    './bundler/lodash-es.js',
    './bundler/popper.js',
  ],
  output: {
    dir: './public',
    format: 'esm',
  },
  external: [],
  plugins: [resolve()],
}
