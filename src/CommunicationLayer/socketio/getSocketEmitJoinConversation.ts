import { socket } from './socketio'

interface GetSocketEmitJoinConversationType {
  (profileNameHost: string, profileName: string): void
}

/**
 * @description Function to emit event to join conversation
 * @import import { getSocketEmitJoinConversation } from '../../CommunicationLayer/socketio/getSocketEmitJoinConversation'
 */
export const getSocketEmitJoinConversation: GetSocketEmitJoinConversationType =
  (profileNameHost, profileName) => {
    try {
      socket.emit('joinConversation', {
        profileNameHost,
        profileName,
      })
      console.info('getSocketEmitJoinConversation [18]', {
        profileNameHost,
        profileName,
      })
    } catch (error: any) {
      console.log('socketio [34]', { message: error.message })
    }
  }
