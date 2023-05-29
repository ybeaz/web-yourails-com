import { socket } from './socketio'
import { handleEvents } from '../../DataLayer/index.handleEvents'

interface GetSocketOnMessageType {
  (): void
}

/**
 * @description Function to
 * @import import { getSocketOnMessage } from '../../CommunicationLayer/socketio/getSocketOnMessage'
 */
export const getSocketOnMessage: GetSocketOnMessageType = () => {
  socket.on('message', message => {
    console.info('getSocketOnMessage [14]', { message })
    handleEvents.ON_MESSAGE_SOCKET({}, { message })
  })
}
