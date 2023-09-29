import { socket } from './socketio'

interface GetSocketDisconnectedType {
  (): void
}

/**
 * @description Function to disconnect from the socket.io server before the page reloads
 * @import import { getSocketDisconnected } from '../../CommunicationLayer/socketio/getSocketDisconnected'
 */
export const getSocketDisconnected: GetSocketDisconnectedType = () => {
  socket.disconnect()
}
