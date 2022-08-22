import { releaseFormula } from './releaseFormula'

type Index = {
  start: number
  end: number
}

export function paginationFormula({ start, end }: Index) {
  return `AND(${releaseFormula()}, AND({index} >= ${start}, {index} <= ${end}))`
}
