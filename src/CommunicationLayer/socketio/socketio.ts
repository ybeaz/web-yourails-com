import { io } from 'socket.io-client'
import { SERVER_SOCKET_IO_HOST } from '../../Constants/servers.const'

export const socket = io(SERVER_SOCKET_IO_HOST)
