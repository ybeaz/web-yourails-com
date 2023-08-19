// import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'
import { getWriteFile } from './getWriteFile'

interface GetGitBuildDataType {
  (pathFull: string, options?: { printRes: boolean }): Promise<any>
}

/**
 * @description Function to getGitBuildData
 * @import import { getGitBuildData } from './getGitBuildData'
 */

export const getGitBuildData: GetGitBuildDataType = async (
  pathFull,
  options
) => {
  try {
    let getGitBuildDataRes = await require('child_process')
      .execSync(
        `git log -1 --pretty=format:'{%n  "commit": "%H",%n  "author": {%n    "name": "%aN",%n    "email": "%aE"%n  },%n  "date": "%ad",%n  "message": "%f"%n}'`
      )
      .toString()
      .trim()

    getGitBuildDataRes = `export const buildData = ${getGitBuildDataRes}`

    await getWriteFile(pathFull, getGitBuildDataRes)

    if (options?.printRes) {
      consoler('getGitBuildData', 'getGitBuildDataRes', getGitBuildDataRes)
    }

    return getGitBuildDataRes
  } catch (error) {
    consolerError('getGitBuildData', error)
    return
  }
}
;(async () => {
  const pathFull =
    '/Users/admin/Dev/yourails-sep-web-native/src/Constants/buildData.const.ts'
  await getGitBuildData(pathFull, { printRes: false })
})()
