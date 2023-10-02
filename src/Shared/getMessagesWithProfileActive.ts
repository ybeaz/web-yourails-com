import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'

import {
  getSortedHashedStringifyArray,
  HashFunctionType,
} from './getSortedHashedStringifyArray'

export type GetMessagesWithProfileActiveParamsType = {
  idProfileHost: IdUserType
  idProfileActive: IdUserType
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
  { idProfileHost, idProfileActive }
) => {
  if (!idProfileHost || !idProfileActive) return []

  const idConversation = getSortedHashedStringifyArray([
    idProfileHost,
    idProfileActive,
  ])

  const messagesWithProfileActive: MessageType[] = messages.filter(
    (message: MessageType) => {
      return message.idConversation === idConversation
    }
  )
  return messagesWithProfileActive
}
