export type GetParsedUrlQuery = {
  (url: string): any
}

/**
 * @description Function parse and return object fron url query string
 * @import import { getParsedUrlQuery } from '../Shared/getParsedUrlQuery'
 */
export const getParsedUrlQuery: GetParsedUrlQuery = url => {
  let urlNext = url

  try {
    if (!url) urlNext = (location && location?.search) || ''
  } catch (error) {
  } finally {
    if (!urlNext.length) return {}

    let query = url.substring(1)
    const result: any = {}

    if (query && query.includes('@')) {
      query = urlNext.replace('#', '')
      const splited = query.split('?')
      result.profileName = splited[0]
      query = splited[1]
    }

    if (query) {
      query.split('&').forEach(function (part) {
        var item = part.split('=')
        result[item[0]] = decodeURIComponent(item[1])
      })
    }
    return result
  }
}
