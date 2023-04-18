import { FunctionComponent } from 'react'
import {
  useMediaQueryResYrl,
  UseMediaQueryResYrlOutType,
  DeviceType,
} from './useMediaQueryResYrl'

export type WithDeviceTypeYrlPropsType = FunctionComponent<any>

export interface WithDeviceTypeYrlType {
  (Component: WithDeviceTypeYrlPropsType): FunctionComponent
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

export const mediaParamsDefault: UseMediaQueryResYrlOutType = {
  deviceType: DeviceType['lgDevice'],
  screenCase: 'lgXl',
  width: 1024,
  height: 800,
}

export const withDeviceTypeYrl: WithDeviceTypeYrlType = function (Component) {
  return function WrappedComponent(props: any) {
    const mediaParams: UseMediaQueryResYrlOutType = useMediaQueryResYrl()
    return <Component {...props} mediaParams={mediaParams} />
  }
}