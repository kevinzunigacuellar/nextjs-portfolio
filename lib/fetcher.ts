export default async function fetcher<JSON = any>(input: string, init?: object): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}
