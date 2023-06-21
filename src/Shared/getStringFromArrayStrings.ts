interface getStringFromArrayStringsType {
  (stringsArray: (string | number | undefined)[] | undefined): string
}

/**
 * @description Function to convert array of strings into string
 * @import import { getStringFromArrayStrings } from '../../../Shared/getStringFromArrayStrings'
 */

export const getStringFromArrayStrings: getStringFromArrayStringsType =
  stringsArray => {
    if (!stringsArray) return ''

    return stringsArray.reduce((accum: string, item) => {
      if (!item) return accum
      return `${accum}${String(item)}`
    }, '')
  }
