import { socket } from './socketio'

interface GetSocketEmitJoinConversationType {
  (profileNameHost: string, profileName: string): void
}

/**
 * @description Function to emit event to join conversation
 * @import import { getSocketEmitJoinConversation } from '../../CommunicationLayer/socketio/getSocketEmitJoinConversation'
 */
export const getSocketEmitJoinConversation: GetSocketEmitJoinConversationType =
  (idProfileHost, idProfile) => {
    try {
      socket.emit('joinConversation', {
        idProfileHost,
        idProfile,
      })
      console.info('getSocketEmitJoinConversation [18]', {
        idProfileHost,
        idProfile,
      })
    } catch (error: any) {
      console.log('socketio [34]', { message: error.message })
    }
  }
