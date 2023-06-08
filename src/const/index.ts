
export * from './imports'
export * from './shared'

import { versionRequestUrlBase, esmoduleUrlBase } from './shared'

export const setupIdux = 'setupIdux.js'

export const defaultFile = 'App.vue'

export const playgroundApp = 'PlaygroundApp.vue'

const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:'

export const versionRequestUrl = `${protocol}${versionRequestUrlBase}`
export const esmoduleUrl = `${protocol}${esmoduleUrlBase}`