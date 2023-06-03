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
    const dataModal = {
      childName: 'AwaitView',
      isShow: isAwaiting,
      childProps: {},
    }
    console.log('getSocketOnAwait [15]', { isAwaiting, dataModal })
    handleEvents.ON_SET_MODAL_AWAIT_VIEW({}, dataModal)
  })
}
