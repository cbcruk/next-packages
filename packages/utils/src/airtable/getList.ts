import { DEFAULT_PARAMS, REQUEST_INIT } from './constants'
import { AirtableResponse, Params, Url } from './types'
import { getQueryString } from './utils'

type ArgType<T> = {
  url?: Url
  params: Params<T>
}

export async function getList<TFields>({ url = '', params }: ArgType<TFields>) {
  const query = getQueryString({
    ...DEFAULT_PARAMS,
    ...params,
  })
  const input = `${(process.env.AIRTABLE_URL || '') + url}?${query}`
  const response = await fetch(input, REQUEST_INIT)
  const data: AirtableResponse<TFields> = await response.json()

  return data
}
