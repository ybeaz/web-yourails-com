import { CLIENTS } from '../Constants/clients.const'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

interface GetDetectedEnv {
  (): keyof typeof CLIENTS
}

/**
 * @description Function to detect environment type
 * @import import { getDetectedEnv } from '../../../Shared/getDetectedEnv'
 */
export const getDetectedEnv: GetDetectedEnv = () => {
  let isSimulator = false

  console.info('getDetectedEnv [16]', {
    'Platform.OS': Platform.OS,
    'DeviceInfo.isEmulator()': DeviceInfo.isEmulator(),
    isSimulator,
  })

  // DeviceInfo.isEmulator().then(isEmulator => {
  //   isSimulator = isEmulator
  // })

  const output: keyof typeof CLIENTS =
    // isSimulator ||
    window?.location?.hostname === '127.0.0.1' ||
    window?.location?.hostname === 'localhost'
      ? 'local'
      : 'remote'

  console.info('getDetectedEnv [34]', {
    'Platform.OS': Platform.OS,
    'DeviceInfo.isEmulator()': DeviceInfo.isEmulator(),
    isSimulator,
    DeviceInfo,
    output,
  })

  return output
}
