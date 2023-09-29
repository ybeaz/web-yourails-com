import { io } from 'socket.io-client'
import { getServerSocketIoHost } from '../../Shared/getServerSocketIoHost'

const serverSocketIoHost = getServerSocketIoHost()

export const socket = io(serverSocketIoHost)
