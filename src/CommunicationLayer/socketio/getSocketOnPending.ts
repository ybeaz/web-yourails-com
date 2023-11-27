import { socket } from './socketio'
import { handleEvents } from '../../DataLayer/index.handleEvents'

interface GetSocketOnPendingType {
  (): void
}

/**
 * @description Function to listed if the message is pending/ in preparation stage
 * @import import { getSocketOnPending } from '../../CommunicationLayer/socketio/getSocketOnPending'
 */
export const getSocketOnPending: GetSocketOnPendingType = () => {
  socket.on('pending', data => {
    const { profileID } = data
    // console.log('getSocketOnPending [16]', data)
    if (profileID) handleEvents.ON_AWAIT_FROM_ID_PROFILE({}, data)
  })
}
