import resolve from '@rollup/plugin-node-resolve'

export default {
  input: [
    './src/bundler/lodash-es.js',
    './src/bundler/popper.js',
  ],
  output: {
    dir: './public',
    format: 'esm',
  },
  external: [],
  plugins: [resolve()],
}
