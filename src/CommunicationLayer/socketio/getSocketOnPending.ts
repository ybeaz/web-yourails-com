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
    const { idProfile, isPending, pendingImage } = data
    // console.log('getSocketOnPending [16]', {
    //   idProfile,
    //   isPending,
    //   pendingImage,
    // })
    handleEvents.ON_AWAIT_FROM_ID_PROFILE(
      {},
      { idProfile, isPending, pendingImage }
    )
  })
}
