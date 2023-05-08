import { IdUserType } from '../@types/UserType'

/**
 * @import import { MessageType } from '../@types/MessageType'
 */
export type MessageType = {
  idMessage: string | number
  idConversation: string | number
  idProfile: IdUserType
  createdAt: number
  text: string
  position?: string
  isTail?: boolean
}
