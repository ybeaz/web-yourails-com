export type IsValidJsonStringParamsType = any

export type IsValidJsonStringResType = any

interface IsValidJsonStringType {
  (
    entity: IsValidJsonStringParamsType,
    options?: { printRes: boolean }
  ): IsValidJsonStringResType
}

/**
 * @description Function to isValidJsonString
 * @import import { isValidJsonString } from './isValidJsonString'
 */

export const isValidJsonString: IsValidJsonStringType = (entity, options) => {
  let output: boolean = false
  try {
    const res = JSON.parse(entity)

    if (options?.printRes) {
      console.log('isValidJsonString', 'res', res)
    }

    output = true
  } catch (error: any) {
    if (options?.printRes) {
      console.log('isValidJsonString ERROR', error.message)
    }
    output = false
  }
  return output
}
