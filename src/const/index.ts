
export * from './imports'
export * from './shared'

import { esmoduleUrlBase, versionRequestUrlBase } from './shared'

export const setupIdux = 'setupIdux.js'
export const setupIduxCharts = 'setupIduxCharts.js'

export const defaultFile = 'App.vue'

export const playgroundApp = 'PlaygroundApp.vue'

// const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:'
const protocol = 'https:'

export const versionRequestUrl = `${protocol}${versionRequestUrlBase}`
export const esmoduleUrl = `${protocol}${esmoduleUrlBase}`