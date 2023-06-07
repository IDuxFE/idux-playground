
import { fetchVersions } from '@/api'
import { compare } from 'compare-versions'
import { esmoduleUrl } from '@/const'

export const genLink = (pkg: string, version?: string, file = '') => {
  const ver = version ? `@${version}` : ''
  return `${esmoduleUrl}${pkg}${ver}${file}`
}

export const getVueVersions = () => {
  const versions = fetchVersions('vue')
  return computed(() => versions.value?.filter(ver => compare(ver, '3.2.9', '>=')))
}

export const getIduxVersions = () => {
  const versions = fetchVersions('@idux/components')
  return computed(() => versions.value?.filter(ver => compare(ver, '1.0.0', '>=')))
}
