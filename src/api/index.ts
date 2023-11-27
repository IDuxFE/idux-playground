
export const fetchVersions = (pkg: string) => {
  return useFetch(
    `https://data.jsdelivr.com/v1/package/npm/${pkg}`, {
    initialData: [],
    afterFetch: (ctx) => ((ctx.data = ctx.data.versions), ctx),
  })
    .json<string[]>().data
}

export const fetchVersionsRaw = async (pkg: string) => {
  const res = await fetch(`https://data.jsdelivr.com/v1/package/npm/${pkg}`)

  const json = await res.json()

  return json.versions
}