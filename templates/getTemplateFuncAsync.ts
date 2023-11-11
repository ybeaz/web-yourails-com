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
      console.log('getTemplateFuncAsync', { res })
      consoler('getTemplateFuncAsync', 'res', res)
    }

    return res
  } catch (error: any) {
    console.log('getTemplateFuncAsync Error', error.message)
    consolerError('getTemplateFuncAsync Error', error.message)
    return
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
