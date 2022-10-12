import { REQUEST_INIT } from './constants'

export async function getItem<TFields>({ url = '', id = '' }) {
  const input = `${(process.env.AIRTABLE_URL || '') + url}/${id}`
  const response = await fetch(input, REQUEST_INIT)
  const data: TFields = await response.json()

  return data
}
