export const REQUEST_INIT = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY || ''}`,
  },
}

export const DEFAULT_PARAMS = {
  pageSize: 20,
}
