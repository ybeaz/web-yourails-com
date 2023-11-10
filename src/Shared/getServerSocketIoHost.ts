import { getDetectedEnv } from './getDetectedEnv'
import { SERVERS_MAIN, ServersType } from '../Constants/servers.const'

interface GetServerSocketIoHostType {
  (): string
}

/**
 * @description Function to
 * @import import { getServerSocketIoHost } from '../../../Shared/getServerSocketIoHost'
 */
export const getServerSocketIoHost: GetServerSocketIoHostType = () => {
  const envType: string = getDetectedEnv()
  const baseURL = SERVERS_MAIN[envType as keyof ServersType] as string
  return baseURL
}
