import { IdUserType } from '../@types/UserType'
import { MessageEventType } from '../@types/MessageEventType'

/**
 * @import import { MessageType } from '../@types/MessageType'
 */
export type MessageType = {
  createdAt?: number
  conversationID: string
  messageID?: string
  profileID: IdUserType
  isPending?: boolean
  imagePendingSrc?: string
  isTail?: boolean
  position?: string
  eventType: MessageEventType
  text: string
}
