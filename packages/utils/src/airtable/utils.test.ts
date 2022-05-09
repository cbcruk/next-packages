import { expect, test } from 'vitest'
import { getQueryString } from '../src/utils'

test('getQueryString', () => {
  const query = getQueryString({
    pageSize: '1',
    sort: [
      {
        field: 'index',
        direction: 'desc',
      },
    ],
    fields: ['table1', 'desc'],
  })

  expect(query).toBe(
    'pageSize=1&sort%5B0%5D%5Bfield%5D=index&sort%5B0%5D%5Bdirection%5D=desc&fields%5B%5D=table1&fields%5B%5D=desc'
  )
})
