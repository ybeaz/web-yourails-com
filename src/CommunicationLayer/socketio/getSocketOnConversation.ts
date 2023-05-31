import { socket } from './socketio'

interface GetSocketOnConversationType {
  (): void
}

/**
 * @description Function to extablish listener for conversations
 * @import import { getSocketOnConversation } from '../../CommunicationLayer/socketio/getSocketOnConversation'
 */
export const getSocketOnConversation: GetSocketOnConversationType = () => {
  try {
    socket.on('conversations', data => {
      // const { conversation } = data
      // const { profiles } = conversation
      // console.info('socketio [14]', { conversation, profiles })
    })
  } catch (error: any) {
    console.log('socketio [19]', { message: error.message })
  }
}
