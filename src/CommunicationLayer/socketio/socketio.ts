import { io } from 'socket.io-client'
import { getServerSocketIoHost } from '../../Shared/getServerSocketIoHost'

const serverSocketIoHost = getServerSocketIoHost()
console.info('socketio [5]', { serverSocketIoHost })

export const socket = io(serverSocketIoHost)
