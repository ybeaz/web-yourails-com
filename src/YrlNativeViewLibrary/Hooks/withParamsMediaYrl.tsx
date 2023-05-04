import React, { FunctionComponent } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import {
  useMediaQueryResYrl,
  UseMediaQueryResYrlOutType,
  DeviceType,
} from './useMediaQueryResYrl'

export type WithParamsMediaYrlPropsType = FunctionComponent<any>

export interface WithParamsMediaYrlType {
  (Component: WithParamsMediaYrlPropsType): FunctionComponent
}

/**
 * @description Function decorator for React Functional Component
 *    to add urlParams and mediaParams property that contains data about the profile's device
 *    from useMediaQueryRes hook:
 *    const { deviceType, screenCase, width, height } = mediaParams
 * @import import { withParamsMediaYrl, UseMediaQueryResYrlType } from './YrlNativeViewLibrary'
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

export const urlParamsDefault = {
  urlParam1: undefined,
  urlParam2: undefined,
  urlParam3: undefined,
}

export const withParamsMediaYrl: WithParamsMediaYrlType = function (Component) {
  return function WrappedComponent(props: any) {
    const urlParams = useParams()
    const [urlParamsSearch] = useSearchParams()
    const mediaParams: UseMediaQueryResYrlOutType = useMediaQueryResYrl()
    const propsNext = { ...props, mediaParams, urlParams, urlParamsSearch }

    return <Component {...propsNext} />
  }
}
