import { IdUserType } from '../@types/UserType'
import { EventType } from '../@types/EventType'

/**
 * @import import { MessageType } from '../@types/MessageType'
 */
export type MessageType = {
  createdAt?: number
  idConversation: string
  idMessage: string
  idProfile: IdUserType
  isTail?: boolean
  position?: string
  eventType: EventType
  text: string
}
