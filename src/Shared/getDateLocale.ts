import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import { MessageType } from '../@types/MessageType'
import { LOCALE, DATE_FORMAT } from '../Constants/locale.const'

interface GetDateLocaleType {
  (messages: MessageType[]): string
}

/**
 * @description Function to create a string with local format for the date
 * @import import { getDateLocale } from '../../../Shared/getDateLocale'
 */

export const getDateLocale: GetDateLocaleType = messages => {
  let dateString = ''
  if (messages.length) {
    const createdAt = messages[0].createdAt
    dateString = dayjs(createdAt).locale(LOCALE).format(DATE_FORMAT)
  }

  return dateString
}
