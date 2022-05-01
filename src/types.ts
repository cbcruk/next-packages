export type Params = Record<
  string,
  string | number | string[] | Record<string, string | number>[]
>

export type GetListArgs = {
  url: string
  params: Params
}

export type AirtableResponse<T> = {
  records: T[]
  offset: string
}
