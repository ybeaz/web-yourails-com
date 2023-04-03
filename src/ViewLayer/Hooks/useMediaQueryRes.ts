import '@expo/match-media'
import { useMediaQuery } from 'react-responsive'
import { Dimensions } from 'react-native'

export type DeviceType =
  | 'xsDevice'
  | 'smDevice'
  | 'mdDevice'
  | 'lgDevice'
  | 'xlDevice'
export type ScreenCaseType = 'xsSmMd' | 'lgXl'

type UseMediaQueryResType = {
  deviceType: DeviceType
  screenCase: ScreenCaseType
  width: number
  height: number
}

/**
 * @import import { useMediaQueryRes } from './Hooks/useMediaQueryRes
 * @media accepted sizes:
  xs 320-480px
  mobile sm 481-768
  tablets md 769 - 1024
  Desktop/laptop lg 1025 - 1620
  Wide screens xl 1621 - 160000'
 */
export const useMediaQueryRes = (): UseMediaQueryResType => {
  const isXsDevice = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 480px)',
  })
  const isSmDevice = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)',
  })
  const isMdDevice = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  })
  const isLgDevice = useMediaQuery({
    query: '(min-width: 1025px) and (max-width: 1620px)',
  })
  const isXlDevice = useMediaQuery({
    query: '(min-width: 1621px) and (max-width: 16000px)',
  })

  let deviceType: any = 'xsDevice'
  if (isXsDevice) deviceType = 'xsDevice'
  if (isSmDevice) deviceType = 'smDevice'
  if (isMdDevice) deviceType = 'mdDevice'
  if (isLgDevice) deviceType = 'lgDevice'
  if (isXlDevice) deviceType = 'xlDevice'

  let screenCase: any = 'xsSmMd'
  if (deviceType === 'lgDevice' || deviceType === 'xlDevice')
    screenCase = 'lgXl'

  const { width, height } = Dimensions.get('window')

  return {
    deviceType,
    screenCase,
    width,
    height,
  }
}
