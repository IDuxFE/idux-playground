import resolve from '@rollup/plugin-node-resolve'

export default {
  input: ['./src/idux.js'],
  output: {
    file: './public/idux.js',
    format: 'esm',
  },
  external: ['vue'],
  plugins: [resolve()],
}
