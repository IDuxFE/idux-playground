
export interface ReplStoreParam {

  /** @default '' */
  serializedState?: string
  versions?: VersionRecord
  defaultVueRuntimeURL?: string
}

export type VersionKey = 'Vue' | 'Idux'
export type VersionRecord = Record<VersionKey, string>
