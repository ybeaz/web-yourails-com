import { getMinifiedBundle } from './getMinifiedBundle'

interface GetIteratedAndMinifiedFilesType {
  (inputDir: string, jsFiles: string[]): Promise<string[]>
}

/**
 * @import import { getIteratedAndMinifiedFiles } from './getIteratedAndMinifiedFiles'
 */
export const getIteratedAndMinifiedFiles: GetIteratedAndMinifiedFilesType =
  async (inputDir, jsFiles) => {
    let output: string[] = []
    jsFiles.forEach((file: string) => {
      const inputFile = `${inputDir}/static/js/${file}`
      const includesMainPrefix = file.includes('main')

      const outputFile = includesMainPrefix
        ? `${inputDir}/static/js/main.bundle.min.js`
        : `${inputDir}/static/js/bundle.min.js`

      getMinifiedBundle(inputFile, outputFile)

      output.push(outputFile)
    })

    return output
  }
