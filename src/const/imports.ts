import { VersionRecord } from '@/types'

export const genImportsMap = (versions: VersionRecord) => {
  const { Vue, iDux, iduxCdk, iduxCharts } = versions
  return {
    vue: {
      pkg: '@vue/runtime-dom',
      version: Vue,
      file: '',
    },
    'vue-types': {
      pkg: 'vue-types',
      version: 'latest',
      file: '',
    },
    '@vue/shared': {
      pkg: '@vue/shared',
      version: 'latest',
      file: '',
    },
    '@juggle/resize-observer': {
      pkg: '@juggle/resize-observer',
      version: 'latest',
      file: '/lib/exports/resize-observer.js',
    },
    'is-plain-object': {
      pkg: 'is-plain-object',
      version: 'latest',
      file: '',
    },
    '@idux/cdk': {
      pkg: '*@idux/cdk',
      version: iduxCdk,
      file: '',
    },
    '@idux/cdk/': {
      pkg: '*@idux/cdk',
      version: iduxCdk,
      file: '/',
    },
    '@idux/components': {
      pkg: '*@idux/components',
      version: iDux,
      file: '',
    },
    '@idux/components/': {
      pkg: '*@idux/components',
      version: iDux,
      file: '/',
    },
    '@idux/pro': {
      pkg: '*@idux/pro',
      version: iDux,
      file: '',
    },
    '@idux/pro/': {
      pkg: '*@idux/pro',
      version: iDux,
      file: '/',
    },
    '@idux/charts': {
      pkg: '*@idux/charts',
      version: iduxCharts,
      file: '',
    },
    '@idux/charts/': {
      pkg: '*@idux/charts',
      version: iduxCharts,
      file: '/',
    },
    '@idux/charts-core': {
      pkg: '*@idux/charts-core',
      version: iduxCharts,
      file: '',
    },
    '@idux/charts-core/': {
      pkg: '*@idux/charts-core',
      version: iduxCharts,
      file: '/',
    },
    '@idux/charts-plots': {
      pkg: '*@idux/charts-plots',
      version: iduxCharts,
      file: '',
    },
    '@idux/charts-plots/': {
      pkg: '*@idux/charts-plots',
      version: iduxCharts,
      file: '/',
    },
    '@atlaskit/pragmatic-drag-and-drop': {
      pkg: '@atlaskit/pragmatic-drag-and-drop',
      version: 'latest',
      file: '',
    },
    '@atlaskit/pragmatic-drag-and-drop/': {
      pkg: '@atlaskit/pragmatic-drag-and-drop',
      version: 'latest',
      file: '/',
    },
    '@atlaskit/pragmatic-drag-and-drop-hitbox': {
      pkg: '@atlaskit/pragmatic-drag-and-drop-hitbox',
      version: 'latest',
      file: '',
    },
    '@atlaskit/pragmatic-drag-and-drop-hitbox/': {
      pkg: '@atlaskit/pragmatic-drag-and-drop-hitbox',
      version: 'latest',
      file: '/',
    },
    '@atlaskit/pragmatic-drag-and-drop-auto-scroll' : {
      pkg: '@atlaskit/pragmatic-drag-and-drop-auto-scroll',
      version: 'latest',
      file: '',
    },
    '@atlaskit/pragmatic-drag-and-drop-auto-scroll/' : {
      pkg: '@atlaskit/pragmatic-drag-and-drop-auto-scroll',
      version: 'latest',
      file: '/',
    },
    'vue-demi': {
      pkg: '*vue-demi',
      version: 'latest',
      file: '',
    },
    'vue-demi/': {
      pkg: '*vue-demi',
      version: 'latest',
      file: '/',
    },
  }
}

export const genLocalImportsMap = () => {
  return {
    'lodash-es': {
      pkg: 'lodash-es',
      version: 'latest',
      file: './deps/lodash-es.js',
    },
    '@floating-ui/dom': {
      pkg: '@floating-ui/dom',
      version: 'latest',
      file: './deps/floating-ui.js',
    },
    ajv: {
      pkg: 'ajv',
      version: 'latest',
      file: './deps/ajv.js',
    },
    'ajv-formats': {
      pkg: 'ajv-formats',
      version: 'latest',
      file: './deps/ajv-formats.js',
    },
    'date-fns': {
      pkg: 'date-fns',
      version: 'latest',
      file: './deps/date-fns.js',
    },
    'date-fns/locale': {
      pkg: 'date-fns',
      version: 'latest',
      file: './deps/date-fns.js',
    },
    '@emotion/hash': {
      pkg: '@emotion/hash',
      version: 'latest',
      file: './deps/emotion-hash.js',
    },
    'echarts': {
      pkg: 'echarts',
      version: 'latest',
      file: './deps/echarts.js',
    },
    'echarts/core': {
      pkg: 'echarts',
      version: 'latest',
      file: './deps/echarts.js',
    },
    'echarts/components': {
      pkg: 'echarts',
      version: 'latest',
      file: './deps/echarts.js',
    },
    'echarts/features': {
      pkg: 'echarts',
      version: 'latest',
      file: './deps/echarts.js',
    },
    'echarts/renderers': {
      pkg: 'echarts',
      version: 'latest',
      file: './deps/echarts.js',
    },
    'echarts/charts': {
      pkg: 'echarts',
      version: 'latest',
      file: './deps/echarts.js',
    },
  }
}
