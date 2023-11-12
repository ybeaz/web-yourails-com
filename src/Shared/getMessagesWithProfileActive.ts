import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'

import { getSortedHashedStringifyArray } from './getSortedHashedStringifyArray'

export type GetMessagesWithProfileActiveParamsType = {
  idProfileHost: IdUserType
  idProfileActive: IdUserType
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
  const { idProfileHost, idProfileActive, printRes } = params

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

  if (printRes) {
    console.log('getMessagesWithProfileActive [44]', {
      messagesWithProfileActive,
    })
  }

  return messagesWithProfileActive
}
