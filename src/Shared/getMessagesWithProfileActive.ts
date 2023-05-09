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

/**
 * @description Function to
 * @import import { getMessagesWithProfileActive } from '../../../Shared/getMessagesWithProfileActive'
 */

export const getMessagesWithProfileActive: GetMessagesWithProfileActiveType = ({
  conversations,
  messages,
  idProfileHost,
  idProfileActive,
}) => {
  return messages
}
