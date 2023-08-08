export type CookieType = {
  get: (name: string) => string
  set: (
    name: string,
    value: string,
    opts: { days?: number; 'max-age'?: number; domain?: string }
  ) => void
  delete: (name: string, opts: any) => void
}

/**
 * @description cookie: get, set, delete
 * @link https://stackoverflow.com/a/48706852/4791116
 * @link http://usejsdoc.org/
 * @import import { cookie } from '../../Shared/cookie'
 */
export const cookie: CookieType = {
  get: name => {
    const cookieMatch = document?.cookie?.match(
      `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
    )

    let c: any = cookieMatch && cookieMatch[1] ? cookieMatch[1] : ''
    if (c) return decodeURIComponent(c)
    return ''
  },

  set: (name, value, opts = { days: 1 }) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'

    if (opts.days) {
      opts['max-age'] = opts.days * 60 * 60 * 24
      delete opts.days
    }
    const { hostname } = location
    if (hostname === '127.0.0.1') {
      delete opts.domain
    }
    const optsStr = Object.entries(opts).reduce(
      (str, [k, v]) => `${str}; ${k}=${v}`,
      ''
    )
    document.cookie = `${name}=${encodeURIComponent(value)};${optsStr}`
  },

  delete: (name, opts) => cookie.set(name, '', { 'max-age': -1, ...opts }),
  // path & domain must match cookie being deleted
}
