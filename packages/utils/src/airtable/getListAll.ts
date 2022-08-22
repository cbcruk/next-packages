import { AirtableResponse, Params } from './types'

type GetListFn<T> = (params: Params<T>) => Promise<AirtableResponse<T>>

export async function getListAll<TFields>(getList: GetListFn<TFields>) {
  const records = []
  const offset = { current: '' }

  do {
    const data = await getList({ offset: offset.current })

    records.push(data.records)

    offset.current = data.offset
  } while (offset.current)

  return records
}
