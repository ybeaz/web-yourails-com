import { socket } from './socketio'

interface GetSocketOnMessageType {
  (): void
}

/**
 * @description Function to
 * @import import { getSocketOnMessage } from '../../CommunicationLayer/socketio/getSocketOnMessage'
 */
export const getSocketOnMessage: GetSocketOnMessageType = () => {
  socket.on('message', message => {
    console.log(message)
    // outputMessage(message)
  })
}
