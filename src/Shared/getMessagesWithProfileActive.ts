import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'

import { getSortedHashedStringifyArray } from './getSortedHashedStringifyArray'

export type GetMessagesWithProfileActiveParamsType = {
  profileHostID: IdUserType
  profileActiveID: IdUserType
  printRes?: boolean
}

interface GetMessagesWithProfileActiveType {
  (
    messages: MessageType[],
    params: GetMessagesWithProfileActiveParamsType
  ): MessageType[]
}

/**
 * @description Function to
 * @import import { getMessagesWithProfileActive, GetMessagesWithProfileActivePropsType } from '../../../Shared/getMessagesWithProfileActive'
 */

export const getMessagesWithProfileActive: GetMessagesWithProfileActiveType = (
  messages,
  params
) => {
  const { profileHostID, profileActiveID, printRes } = params

  if (!profileHostID || !profileActiveID) return []

  const conversationID = getSortedHashedStringifyArray([
    profileHostID,
    profileActiveID,
  ])

  const messagesWithProfileActive: MessageType[] = messages.filter(
    (message: MessageType) => {
      return message.conversationID === conversationID
    }
  )

  if (printRes) {
    console.log('getMessagesWithProfileActive [44]', {
      messagesWithProfileActive,
    })
  }

  return messagesWithProfileActive
}
