import { CLIENTS } from '../Constants/clients.const'
import * as Device from 'expo-device'

interface GetDetectedEnv {
  (): keyof typeof CLIENTS
}

/**
 * @description Function to detect environment type
 * @import import { getDetectedEnv } from '../../../Shared/getDetectedEnv'
 */
export const getDetectedEnv: GetDetectedEnv = () => {
  let isSimulator = false
  if (!Device?.isDevice) isSimulator = true

  const output: keyof typeof CLIENTS =
    isSimulator ||
    window?.location?.hostname === '127.0.0.1' ||
    window?.location?.hostname === 'localhost'
      ? 'local'
      : 'remote'

  return output
}
