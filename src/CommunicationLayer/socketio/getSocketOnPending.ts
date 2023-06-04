import { socket } from './socketio'
import { handleEvents } from '../../DataLayer/index.handleEvents'

interface GetSocketOnPendingType {
  (): void
}

/**
 * @description Function to
 * @import import { getSocketOnPending } from '../../CommunicationLayer/socketio/getSocketOnPending'
 */
export const getSocketOnPending: GetSocketOnPendingType = () => {
  socket.on('pending', data => {
    const { idProfile, isPending } = data
    // console.info('getSocketOnPending [16]', { idProfile, isPending })
    handleEvents.ON_AWAIT_FROM_ID_PROFILE({}, { idProfile, isPending })
  })
}
