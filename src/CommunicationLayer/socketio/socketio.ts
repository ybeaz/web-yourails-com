import { io } from 'socket.io-client'

const socket = io('http://localhost:3003')

/**
 * @import import { socketEmitJoinConversation, socketOnConversation } from '../CommunicationLayer/socketio/socketio'
 */

export const socketOnConversation = () => {
  socket.on('conversations', socket => {
    const { users } = socket
    console.info('socketio [12]', { users, socket })
  })
}

export const socketEmitJoinConversation = (
  profileNameHost: string,
  profileName: string
) => {
  /** @description Join chatroom */
  socket.emit('joinConversation', {
    profileNameHost,
    profileName, // '@smid',
  })
}
