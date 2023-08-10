import { IdUserType } from '../@types/UserType'
import { MessageEventType } from '../@types/MessageEventType'

/**
 * @import import { MessageType } from '../@types/MessageType'
 */
export type MessageType = {
  createdAt?: number
  idConversation: string
  idMessage?: string
  idProfile: IdUserType
  isPending?: boolean
  imagePendingSrc?: string
  isTail?: boolean
  position?: number
  eventType: MessageEventType
  text: string
}
