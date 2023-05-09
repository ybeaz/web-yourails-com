import { IdUserType } from '../@types/UserType'
import { ConversationType } from '../@types/ConversationType'
import { MessageType } from '../@types/MessageType'

export type GetMessagesWithProfileActivePropsType = {
  conversations: ConversationType[]
  messages: MessageType[]
  idProfileHost: IdUserType
  idProfileActive: IdUserType
}

interface GetMessagesWithProfileActiveType {
  (props: GetMessagesWithProfileActivePropsType): MessageType[]
}

const getSortedStringifyArray = (arr: any[]): string =>
  JSON.stringify(arr.sort((a, b) => a.localeCompare(b)))

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

  const conversationsWithProfileActive: ConversationType[] =
    conversations.filter((conversation: ConversationType) => {
      const idsProfilesConversationSortedString = getSortedStringifyArray(
        conversation.idsProfiles
      )
      const idsProfilesInputSortedString = getSortedStringifyArray([
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
        message.idConversation ===
        conversationsWithProfileActive[0]?.idConversation
      )
    }
  )
  return messagesWithProfileActive
}
