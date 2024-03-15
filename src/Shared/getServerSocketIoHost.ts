import { getDetectedEnv } from './getDetectedEnv'
import { SERVERS_MAIN, ServersType } from '../Constants/servers.const'

import { isServerSocketIoHostRemoteFlag } from '../FeatureFlags'

interface GetServerSocketIoHostType {
  (): string
}

/**
 * @description Function to
 * @import import { getServerSocketIoHost } from '../../../Shared/getServerSocketIoHost'
 */
export const getServerSocketIoHost: GetServerSocketIoHostType = () => {
  const envType: string = getDetectedEnv()
  let baseURL = SERVERS_MAIN[envType as keyof ServersType] as string
  if (isServerSocketIoHostRemoteFlag()) baseURL = SERVERS_MAIN['remote']

  return baseURL
}
