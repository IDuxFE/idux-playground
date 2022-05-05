
export interface ReplStoreParam {

  /** @default '' */
  serializedState?: string
  versions?: VersionRecord
}

export type VersionKey = 'Vue' | 'iDux'
export type VersionRecord = Record<VersionKey, string>

export type PendingCompiler = Promise<typeof import('vue/compiler-sfc')> | null
