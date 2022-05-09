import { DEFAULT_PARAMS, REQUEST_INIT } from './constants'
import type { AirtableResponse, GetListArgs } from './types'
import { getQueryString } from './utils'

export async function getList<T>({ url, params }: GetListArgs) {
  const query = getQueryString({
    ...DEFAULT_PARAMS,
    ...params,
  })
  const input = `${(process.env.AIRTABLE_URL || '') + url}?${query}`
  const response = await fetch(input, REQUEST_INIT)
  const data = (await response.json()) as AirtableResponse<T>

  return data
}

export async function getListAll<T>(
  getList: (params: GetListArgs['params']) => Promise<AirtableResponse<T>>
) {
  const records = []
  const offset = { current: '' }

  do {
    const data = await getList({ offset: offset.current })

    records.push(data.records)

    offset.current = data.offset
  } while (offset.current)

  return records
}
