import { getFilesListInDir } from './getFilesListInDir'
import { getCopiedFileDir } from './getCopiedFileDir'
import { givePermission } from './givePermission'
import { getIteratedAndMinifiedFiles } from './getIteratedAndMinifiedFiles'

// const getFilesListInDir = require('./getFilesListInDir')
// const getCopiedFileDir = require('./getCopiedFileDir')
// const givePermission = require('./givePermission')
// const getIteratedAndMinifiedFiles = require('./getIteratedAndMinifiedFiles')

/**
 * @run_file yarn minify
 */

const getPreparedFilesPublicWeb = async () => {
  const buildDir = '/Users/admin/Dev/yourails-sep-web-native/web-build'

  // Get a list of js files in static/js directory
  const inputDir = `${buildDir}/static/js`
  const extname = '.js'
  const jsFiles = await getFilesListInDir(inputDir, extname)

  // Get, iterate and minify files
  const minifiedFilesList = await getIteratedAndMinifiedFiles(buildDir, jsFiles)
  console.log('\n')
  minifiedFilesList.forEach((file: string) =>
    console.log(
      '* getPreparedFilesPublicWeb [20] ',
      `Minified and compressed code written to ${file}.`
    )
  )

  // Give permission to the build directories
  await givePermission(buildDir)

  // Copy files to deployment directory
  const filesList = ['index.html', '.htaccess']
  filesList.forEach(async (file: string, index: number) => {
    const source = `/Users/admin/Dev/yourails-sep-web-native/deployment/${file}`
    const destination = `${buildDir}/${file}`
    const overwrite = true
    const copiedFileName = await getCopiedFileDir(
      source,
      destination,
      overwrite
    )

    console.log(
      '* getPreparedFilesPublicWeb [37] ',
      `File "${source}" copied to "${copiedFileName}".`
    )

    if (index === filesList.length - 1) console.log('\n')
  })
}

getPreparedFilesPublicWeb()
