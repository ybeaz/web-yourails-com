import React, { FunctionComponent } from 'react'
import { Platform } from 'react-native'
import { useSearchParams, useParams } from 'react-router-dom'
import {
  useMediaQueryResYrl,
  MediaParamsDefaultType,
  DeviceType,
} from './useMediaQueryResYrl'

export type WithParamsMediaYrlPropsType = FunctionComponent<any>

export interface WithParamsMediaYrlType {
  (Component: WithParamsMediaYrlPropsType): FunctionComponent
}

export type UrlParamsDefaultType = {
  urlParam1: string | undefined
  urlParam2: string | undefined
  urlParam3: string | undefined
}

/**
 * @description Function decorator for React Functional Component
 *    to add urlParams and mediaParams property that contains data about the profile's device
 *    from useMediaQueryRes hook:
 *    const { deviceType, screenCase, width, height } = mediaParams
 * @import import { withParamsMediaYrl, UseMediaQueryResYrlType } from './YrlNativeViewLibrary'
 * @use export const Portfolio = withDeviceType(React.memo(PortfolioComponent))
 * @media accepted sizes:
  xs 320-480px
  mobile sm 481-768
  tablets md 769 - 1024
  Desktop/laptop lg 1025 - 1620
  Wide screens xl 1621 - 16000'
 */

export const mediaParamsDefault: MediaParamsDefaultType = {
  deviceType: DeviceType['lgDevice'],
  screenCase: 'lgXl',
  width: 1024,
  height: 800,
}

export const urlParamsDefault: UrlParamsDefaultType = {
  urlParam1: undefined,
  urlParam2: undefined,
  urlParam3: undefined,
}

export type PlatformOSYrlType = 'ios' | 'android' | 'windows' | 'macos' | 'web'

export const withParamsMediaYrl: WithParamsMediaYrlType = function (Component) {
  return function WrappedComponent(props: any) {
    let urlParams = undefined
    let urlParamsSearch = undefined
    const platformOS: PlatformOSYrlType = Platform.OS
    if (platformOS === 'web') {
      urlParams = useParams()
      const [urlParamsSearchM1] = useSearchParams()
      urlParamsSearch = urlParamsSearchM1
    }

    const mediaParams: MediaParamsDefaultType = useMediaQueryResYrl()
    const propsNext = {
      ...props,
      mediaParams,
      urlParams,
      urlParamsSearch,
      platformOS,
    }
    return <Component {...propsNext} />
  }
}
