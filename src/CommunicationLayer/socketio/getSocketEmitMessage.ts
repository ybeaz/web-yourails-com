import { socket } from './socketio'
import { MessageType } from '../../@types/MessageType'

interface GetSocketEmitMessageType {
  (message: MessageType): void
}

/**
 * @description Function to
 * @import import { getSocketEmitMessage } from '../../CommunicationLayer/socketio/getSocketEmitMessage'
 */
export const getSocketEmitMessage: GetSocketEmitMessageType = message => {
  console.info('getSocketEmitMessage [29]', { message })
  socket.emit('chatMessage', message)
}
