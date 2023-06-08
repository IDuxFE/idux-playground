import { versionRequestUrl } from '@/const'

export const fetchVersions = (pkg: string) => {
  const { data } = useFetch(`${versionRequestUrl}${pkg}`, {
    afterFetch: (ctx) => {
      ctx.data = Object.keys(ctx.data.versions)
      return ctx
    },
  }).json<string[]>()

  return data
}