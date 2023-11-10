import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetTemplateFuncAsyncParamsType = any

export type GetTemplateFuncAsyncResType = Promise<any>

interface GetTemplateFuncAsyncType {
  (
    params: GetTemplateFuncAsyncParamsType,
    options?: { printRes: boolean }
  ): GetTemplateFuncAsyncResType
}

/**
 * @description Function to getTemplateFuncAsync
 * @run ts-node src/shared/utils/getTemplateFuncAsync.ts
 * @import import { getTemplateFuncAsync } from './getTemplateFuncAsync'
 */

export const getTemplateFuncAsync: GetTemplateFuncAsyncType = async (
  params,
  options
) => {
  try {
    const res = await ''

    if (options?.printRes) {
      consoler('getTemplateFuncAsync', 'res', res)
    }

    return res
  } catch (error: any) {
    consolerError('getTemplateFuncAsync', error)
    return
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
} else {
  // This code will run if the file is imported as a module
  console.log('This file is being imported as a module.')
}
