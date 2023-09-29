import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import { LOCALE, DATE_FORMAT } from '../Constants/locale.const'

interface GetDateLocaleType {
  (dateUnix: number): string
}

/**
 * @description Function to create a string with local format for the date
 * @import import { getDateLocale } from '../../../Shared/getDateLocale'
 */

export const getDateLocale: GetDateLocaleType = dateUnix => {
  return dayjs(dateUnix).locale(LOCALE).format(DATE_FORMAT)
}
