import { fetchVersions, fetchVersionsRaw } from '@/api'
import { compare } from 'compare-versions'
import { esmoduleUrl } from '@/const'

export const genLink = (pkg: string, version?: string, file = '') => {
  const ver = version ? `@${version}` : ''
  return `${esmoduleUrl}${pkg}${ver}${file}`
}

export const getVueVersions = () => {
  const versions = fetchVersions('vue')
  return computed(() => versions.value?.filter((ver) => compare(ver, '3.2.9', '>=')))
}

export const getIduxVersions = () => {
  const versions = fetchVersions('@idux/components')
  return computed(() => versions.value?.filter((ver) => compare(ver, '1.0.0', '>=')))
}

export const getIduxChartsVersions = () => {
  const versions = fetchVersions('@idux/charts')
  return computed(() => versions.value)
}

export const fetchVueVersions = async () => {
  const versions = await fetchVersionsRaw('vue')
  return (
    versions
      ?.filter((ver: string) => compare(ver, '3.2.9', '>='))
      .sort((ver1: string, ver2: string) =>
        compare(ver1, ver2, '>') ? -1 : compare(ver1, ver2, '<') ? 1 : 0
      ) ?? []
  )
}

export const fetchIduxVersions = async () => {
  const versions = await fetchVersionsRaw('@idux/components')
  return (
    versions
      ?.filter((ver: string) => compare(ver, '1.0.0', '>='))
      .sort((ver1: string, ver2: string) =>
        compare(ver1, ver2, '>') ? -1 : compare(ver1, ver2, '<') ? 1 : 0
      ) ?? []
  )
}

export const fetchIduxCdkVersions = async () => {
  const versions = await fetchVersionsRaw('@idux/cdk')
  return (
    versions
      ?.filter((ver: string) => compare(ver, '1.0.0', '>='))
      .sort((ver1: string, ver2: string) =>
        compare(ver1, ver2, '>') ? -1 : compare(ver1, ver2, '<') ? 1 : 0
      ) ?? []
  )
}

export const fetchIduxChartsVersions = async () => {
  const versions = await fetchVersionsRaw('@idux/charts')

  return versions
}
