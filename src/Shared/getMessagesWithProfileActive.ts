import { IdUserType } from '../@types/UserType'
import { ConversationType } from '../@types/ConversationType'
import { MessageType } from '../@types/MessageType'

import {
  getSortedHashedStringifyArray,
  HashFunctionType,
} from './getSortedHashedStringifyArray'

export type GetMessagesWithProfileActivePropsType = {
  conversations: ConversationType[]
  messages: MessageType[]
  idProfileHost: IdUserType
  idProfileActive: IdUserType
}

interface GetMessagesWithProfileActiveType {
  (props: GetMessagesWithProfileActivePropsType): MessageType[]
}

/**
 * @description Function to
 * @import import { getMessagesWithProfileActive, GetMessagesWithProfileActivePropsType } from '../../../Shared/getMessagesWithProfileActive'
 */

export const getMessagesWithProfileActive: GetMessagesWithProfileActiveType = ({
  conversations,
  messages,
  idProfileHost,
  idProfileActive,
}) => {
  if (!idProfileHost || !idProfileActive) return []

  const conversationWithProfileActive: ConversationType | undefined =
    conversations.find((conversation: ConversationType) => {
      const idsProfilesConversationSortedString = getSortedHashedStringifyArray(
        conversation.idsProfiles
      )
      const idsProfilesInputSortedString = getSortedHashedStringifyArray([
        idProfileHost,
        idProfileActive,
      ])

      return (
        idsProfilesConversationSortedString === idsProfilesInputSortedString
      )
    })

  const messagesWithProfileActive: MessageType[] = messages.filter(
    (message: any) => {
      return (
        message.idConversation === conversationWithProfileActive?.idConversation
      )
    }
  )
  return messagesWithProfileActive
}
