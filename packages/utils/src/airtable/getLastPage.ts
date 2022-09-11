import { PAGE_SIZE } from './constants'

export function getLastPage(total: number) {
  return Math.ceil(total / PAGE_SIZE)
}
