import { versionRequestUrl } from '@/const'
import { compare } from 'compare-versions'

export const fetchVersions = (pkg: string) => {
  const { data } = useFetch(`${versionRequestUrl}${pkg}`, {
    afterFetch: (ctx) => {
      const versions = ctx.data.versions as string[]
      versions.sort((v1, v2) => compare(v1, v2, '<=') ? 1 : -1)
      ctx.data = versions
      return ctx
    },
  }).json<string[]>()

  return data
}

export const fetchVersionsRaw = async (pkg: string) => {
  const res = await fetch(`${versionRequestUrl}${pkg}`)

  const json = await res.json()

  const versions = json.versions as string[]

  return versions.sort((v1, v2) => compare(v1, v2, '<=') ? 1 : -1)
}