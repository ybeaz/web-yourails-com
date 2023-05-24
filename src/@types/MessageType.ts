import { IdUserType } from '../@types/UserType'

/**
 * @import import { MessageType } from '../@types/MessageType'
 */
export type MessageType = {
  createdAt: number
  idConversation: string
  idMessage: string
  idProfile: IdUserType
  isTail?: boolean
  position?: string
  text: string
}
