import Airtable, { FieldSet } from 'airtable'
import { QueryParams } from 'airtable/lib/query_params'

export type Url = Airtable.AirtableOptions['endpointUrl']

export type Params<TFields> = Omit<QueryParams<TFields>, 'offset'> & {
  offset?: string
}

export type Records<TFields> = Airtable.Records<FieldSet & TFields>

export type AirtableResponse<TFields> = {
  records: Records<TFields>
  offset: string
}
