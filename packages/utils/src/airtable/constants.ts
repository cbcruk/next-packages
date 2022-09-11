export const PAGE_SIZE = 20

export const REQUEST_INIT = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY || ''}`,
  },
}

export const DEFAULT_PARAMS = {
  pageSize: PAGE_SIZE,
}
