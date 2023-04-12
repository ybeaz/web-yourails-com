import { FunctionComponent } from 'react'
import {
  useMediaQueryResYrl,
  UseMediaQueryResYrlType,
  DeviceType as DeviceTypeIn,
} from './useMediaQueryResYrl'

export enum DeviceType {
  xsDevice = DeviceTypeIn['xsDevice'],
  smDevice = DeviceTypeIn['smDevice'],
  mdDevice = DeviceTypeIn['mdDevice'],
  lgDevice = DeviceTypeIn['lgDevice'],
  xlDevice = DeviceTypeIn['xlDevice'],
}

/**
 * @description Function decorator for React Functional Component
 *    to add mediaParams property that contains data about the profile's device
 *    from useMediaQueryRes hook:
 *    const { deviceType, screenCase, width, height } = mediaParams
 * @import import { withDeviceTypeYrl } from './YrlNativeViewLibrary/Hooks/withDeviceTypeYrl'
 * @import import { UseMediaQueryResYrlType  } from './YrlNativeViewLibrary/Hooks/useMediaQueryResYrl'
 * @use export const Portfolio = React.memo(withDeviceType(PortfolioComponent))
 * @media accepted sizes:
  xs 320-480px
  mobile sm 481-768
  tablets md 769 - 1024
  Desktop/laptop lg 1025 - 1620
  Wide screens xl 1621 - 16000'
 */

export const mediaParamsDefault: UseMediaQueryResYrlType = {
  deviceType: DeviceTypeIn.lgDevice,
  screenCase: 'lgXl',
  width: 1024,
  height: 800,
}

export function withDeviceTypeYrl(
  Component: FunctionComponent<any>
): FunctionComponent {
  return function WrappedComponent(props: any) {
    const mediaParams: UseMediaQueryResYrlType = useMediaQueryResYrl()
    return <Component {...props} mediaParams={mediaParams} />
  }
}
