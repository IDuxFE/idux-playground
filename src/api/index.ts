import { versionRequestUrl } from '@/const'

export const fetchVersions = (pkg: string) => {
  const { data } = useFetch(`${versionRequestUrl}${pkg}`, {
    afterFetch: (ctx) => {
      ctx.data = ctx.data.versions
      return ctx
    },
  }).json<string[]>()

  return data
}

export const fetchVersionsRaw = async (pkg: string) => {
  const res = await fetch(`${versionRequestUrl}${pkg}`)

  const json = await res.json()

  return json.versions
}