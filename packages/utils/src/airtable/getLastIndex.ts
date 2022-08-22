import { getList } from './getList'
import { releaseFormula } from './releaseFormula'

export async function getLastIndex(url = '/Table%201') {
  const data = await getList({
    url,
    params: {
      pageSize: 1,
      sort: [
        {
          field: 'index',
          direction: 'desc',
        },
      ],
      fields: ['index'],
      filterByFormula: releaseFormula(),
    },
  })

  return data.records[0]?.fields.index as number
}
