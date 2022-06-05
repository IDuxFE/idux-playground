import resolve from '@rollup/plugin-node-resolve'

export default {
  input: [
    './src/bundler/idux-components.js',
    './src/bundler/idux-cdk.js',
    './src/bundler/idux-pro.js',
  ],
  output: {
    dir: './public',
    format: 'esm',
  },
  external: ['vue'],
  plugins: [resolve()],
}
