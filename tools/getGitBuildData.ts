// import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'
import { getWriteFile } from './getWriteFile'
import { execSync } from 'child_process'

interface GetGitBuildDataType {
  (pathFull: string, options?: { printRes: boolean }): Promise<any>
}

/**
 * @description Function to getGitBuildData
 * @run ts-node tools/getGitBuildData.ts
 * @import import { getGitBuildData } from './getGitBuildData'
 */

export const getGitBuildData: GetGitBuildDataType = async (
  pathFull,
  options
) => {
  try {
    const branchCurrent = await execSync(`git branch --show-current`)
      .toString()
      .trim()

    let getGitBuildDataRes = await execSync(
      `git log -1 --pretty=format:'{%n  "commit": "%H",%n  "author": {%n    "name": "%aN",%n    "email": "%aE"%n  },%n  "date": "%ad",%n  "message": "%f"%n}'`
    )
      .toString()
      .trim()

    const getGitBuildDataResObj = JSON.parse(getGitBuildDataRes) as Object

    getGitBuildDataRes = JSON.stringify({
      ...getGitBuildDataResObj,
      branchCurrent,
    })

    getGitBuildDataRes = `export const buildData = ${getGitBuildDataRes}`

    await getWriteFile(pathFull, getGitBuildDataRes)

    if (options?.printRes) {
      consoler('getGitBuildData', 'getGitBuildDataRes', {
        getGitBuildDataRes,
        getGitBuildDataResObj,
      })
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
