import { PAGE_SIZE } from './constants'

export function getPagination(page: string) {
  const currentPage = parseInt(page, 10)
  const startIndex = PAGE_SIZE * (currentPage - 1) + 1
  const endIndex = startIndex + PAGE_SIZE - 1

  return {
    page: currentPage,
    startIndex,
    endIndex,
  }
}
