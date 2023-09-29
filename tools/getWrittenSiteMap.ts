import * as fs from 'fs'
var { join } = require('path')

import { createSitemapXml } from './createSitemapXml'
import { getReadJsonFile } from './getReadFile'

const getWrittenSiteMap = async () => {
  const baseUrl = 'https://yourails.com'

  const pathContentInfo = join(
    __dirname,
    '..',
    'assets/appBrowser/contentInfo.json'
  )

  const contentInfo = await getReadJsonFile(pathContentInfo)
  const { courses } = contentInfo

  const path = join(__dirname, '..', 'assets/general')

  const siteMapXmlString = createSitemapXml(baseUrl, courses)

  const fileName = '/sitemap.xml'
  const filePath = `${path}${fileName}`

  await fs.writeFileSync(filePath, siteMapXmlString)

  console.info('sitemap.xml is updated, file:', filePath)
}

getWrittenSiteMap()
