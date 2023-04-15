import convert from 'xml-js'

import { getSlug } from '../src/shared/utils/getSlug'

export const createSitemapXml: Function = (baseUrl: string, courses: any[]) => {
  const urlMap = courses.map(course => {
    const { courseID, capture, language } = course
    const slug = getSlug(capture)
    const loc = `${baseUrl}/c/${courseID}/${slug}`
    const lastmod = new Date().toISOString()

    return {
      loc,
      lastmod,
      'xhtml:link': {
        _attributes: {
          rel: 'alternate',
          href: loc,
          hreflang: language,
        },
      },
    }
  })

  return convert.js2xml(
    {
      _declaration: {
        _attributes: {
          version: '1.0',
          encoding: 'UTF-8',
        },
      },
      urlset: {
        _attributes: {
          xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
          'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
        },
        url: urlMap,
      },
    },
    { compact: true }
  )
}
