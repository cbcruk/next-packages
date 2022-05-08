import { rest } from 'msw'
import records from './response.json'

export const restHandlers = [
  rest.get('https://api.airtable.com/v0', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(records))
  }),
]
