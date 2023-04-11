/**
 * @import import { MessageType } from '../@types/MessageType'
 */
export type MessageType = {
  idMessage: string | number
  idUser: string | number
  createdAt: number
  text: string
  position: string
  isTail: boolean
}
