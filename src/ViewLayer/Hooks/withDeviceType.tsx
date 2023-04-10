import { FunctionComponent } from 'react'
import {
  useMediaQueryRes,
  UseMediaQueryResType,
  DeviceType as DeviceTypeIn,
} from './useMediaQueryRes'

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
 * @import import { withDeviceType } from '../../Hooks/withDeviceType'
 * @import import { UseMediaQueryResType  } from '../../Hooks/useMediaQueryRes'
 * @use export const Portfolio = React.memo(withDeviceType(PortfolioComponent))
 * @media accepted sizes:
  xs 320-480px
  mobile sm 481-768
  tablets md 769 - 1024
  Desktop/laptop lg 1025 - 1620
  Wide screens xl 1621 - 16000'
 */

export const mediaParamsDefault: UseMediaQueryResType = {
  deviceType: DeviceTypeIn.lgDevice,
  screenCase: 'lgXl',
  width: 1024,
  height: 800,
}

export function withDeviceType(
  Component: FunctionComponent<any>
): FunctionComponent {
  return function WrappedComponent(props: any) {
    const mediaParams: UseMediaQueryResType = useMediaQueryRes()
    return <Component {...props} mediaParams={mediaParams} />
  }
}
