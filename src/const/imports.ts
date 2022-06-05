import { VersionRecord } from '@/types'


export const genImportsMap = (versions: VersionRecord) => {
  const { Vue, iDux } = versions

  return {
    '@idux/cdk': {
      pkg: '@idux/cdk',
      version: iDux,
      file: '/index.full.min.mjs',
    },
    '@idux/cdk/': {
      pkg: '@idux/cdk',
      version: iDux,
      file: '/',
    },
    '@idux/components': {
      pkg: '@idux/components',
      version: iDux,
      file: '/index.full.min.mjs',
    },
    '@idux/components/': {
      pkg: '@idux/components',
      version: iDux,
      file: '/',
    },
    '@idux/pro': {
      pkg: '@idux/pro',
      version: iDux,
      file: '/index.full.min.mjs',
    },
    '@idux/pro/': {
      pkg: '@idux/pro',
      version: iDux,
      file: '/',
    },
    vue: {
      pkg: 'vue',
      version: Vue,
      file: '/dist/vue.esm-browser.js',
    },
    'vue-types': {
      pkg: 'vue-types',
      version: 'latest',
      file: '/dist/vue-types.m.js',
    },
    '@vue/shared': {
      pkg: '@vue/shared',
      version: 'latest',
      file: '/dist/shared.esm-bundler.js',
    },
    '@juggle/resize-observer': {
      pkg: '@juggle/resize-observer',
      version: 'latest',
      file: '/lib/exports/resize-observer.js',
    },
    'is-plain-object': {
      pkg: 'is-plain-object',
      version: 'latest',
      file: '/dist/is-plain-object.mjs',
    },
    'date-fns': {
      pkg: 'date-fns',
      version: 'latest',
      file: '/esm/index.js',
    },
    'date-fns/': {
      pkg: 'date-fns',
      version: 'latest',
      file: '/esm/',
    }
  }
}

export const genLocalImportsMap = () => {
  return {
    'lodash-es': {
      pkg: 'lodash-es',
      version: 'latest',
      file: './lodash-es.js',
    },
    '@popperjs/core': {
      pkg: '@popperjs/core',
      version: 'latest',
      file: './popper.js',
    },
  }
}
