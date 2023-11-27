
import { fetchVersions, fetchVersionsRaw } from '@/api'
import { compare } from 'compare-versions'

export const genLink = (pkg: string, version?: string, file = '') => {
  const ver = version ? `@${version}` : ''
  return `https://unpkg.com/${pkg}${ver}${file}`
}

export const getVueVersions = () => {
  const versions = fetchVersions('vue')
  return computed(() => versions.value?.filter(ver => compare(ver, '3.2.9', '>=')))
}

export const getIduxVersions = () => {
  const versions = fetchVersions('@idux/components')
  return computed(() => versions.value?.filter(ver => compare(ver, '1.0.0', '>=')))
}

export const getIduxCdkVersions = async () => {
  const versions = await fetchVersionsRaw('@idux/cdk')
  return versions?.filter((ver: string) => compare(ver, '1.0.0', '>='))
}