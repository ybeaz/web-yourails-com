import { socket } from './socketio'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { MessageType } from '../../@types/MessageType'

interface GetSocketOnMessageType {
  (): void
}

/**
 * @description Function to
 * @import import { getSocketOnMessage } from '../../CommunicationLayer/socketio/getSocketOnMessage'
 */
export const getSocketOnMessage: GetSocketOnMessageType = () => {
  socket.on('message', (message: MessageType) => {
    handleEvents.ON_MESSAGE_SOCKET({}, { message })
  })
}
