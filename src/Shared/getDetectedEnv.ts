import { CLIENTS } from '../Constants/clients.const'

interface GetDetectedEnv {
  (): keyof typeof CLIENTS
}

/**
 * @description Function to detect environment type
 * @import import { getDetectedEnv } from '../../../Shared/getDetectedEnv'
 */
export const getDetectedEnv: GetDetectedEnv = () => {
  return location.hostname === '127.0.0.1' || location.hostname === 'localhost'
    ? 'local'
    : 'remote'
}
