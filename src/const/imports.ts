import { fetchIduxCdkVersions } from './../utils'
import { VersionRecord } from '@/types'
import { compare } from 'compare-versions'

export const genImportsMap = async (versions: VersionRecord) => {
  const { Vue, iDux, iduxCharts } = versions

  let cdkVersions = (await fetchIduxCdkVersions()) ?? []
  if (!iDux.startsWith('2') && iDux !== 'latest') {
    cdkVersions = cdkVersions.filter((ver: string) => ver.startsWith('1'))
  }

  const cdkVersion =
    cdkVersions.includes(iDux) || iDux === 'latest'
      ? iDux
      : cdkVersions.find((ver: string) => compare(ver, iDux, '<=')) ?? cdkVersions[0]

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
      version: cdkVersion,
      file: '',
    },
    '@idux/cdk/': {
      pkg: '*@idux/cdk',
      version: cdkVersion,
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
    'echarts': {
      pkg: 'echarts',
      version: 'latest',
      file: '',
    },
    'echarts/': {
      pkg: 'echarts',
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
    }
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
  }
}
