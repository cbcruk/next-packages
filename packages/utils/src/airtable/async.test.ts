import { test, expect } from 'vitest'
import { afterAll, afterEach, beforeAll } from 'vitest'
import server from '../../mocks/server'
import { getList } from './getList'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('getList', async () => {
  const response = await getList({
    url: 'https://api.airtable.com/v0',
    params: {},
  })

  expect(response.records.length).toBe(2)
})
