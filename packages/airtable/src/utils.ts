import { Params } from './types'

export function getQueryString(params: Params) {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((innerValue, index) => {
        if (typeof innerValue !== 'string') {
          Object.entries(innerValue).forEach(([nestedKey, nestedValue]) => {
            searchParams.append(
              `${key}[${index}][${nestedKey}]`,
              `${nestedValue}`
            )
          })

          return
        }

        searchParams.append(`${key}[]`, `${innerValue}`)
      })

      return
    }

    searchParams.append(key, `${value}`)
  })

  const query = searchParams.toString()

  return query
}
