import { socket } from './socketio'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { MessageType } from '../../@types/MessageType'

interface GetSocketOnAwaitType {
  (): void
}

/**
 * @description Function to
 * @import import { getSocketOnAwait } from '../../CommunicationLayer/socketio/getSocketOnAwait'
 */
export const getSocketOnAwait: GetSocketOnAwaitType = () => {
  socket.on('await', data => {
    const { isAwaiting } = data
    console.log('getSocketOnAwait [15]', { isAwaiting })
    // handleEvents.ON_MESSAGE_SOCKET({}, { message })
  })
}
