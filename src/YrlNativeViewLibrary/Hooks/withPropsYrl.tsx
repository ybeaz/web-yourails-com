import React, { FunctionComponent } from 'react'
import {
  useMediaQueryResYrl,
  UseMediaQueryResYrlOutType,
  DeviceType,
} from './useMediaQueryResYrl'

export type withParamsMediaYrlPropsType = FunctionComponent<any>

export interface withParamsMediaYrlType {
  (Component: withParamsMediaYrlPropsType): FunctionComponent
}

/**
 * @description Function decorator for React Functional Component
 *    to add arbitrary extra props to the component in a declarative style through props
 * @import import { withPropsYrl } from './YrlNativeViewLibrary'
 */

export const withPropsYrl: any = (extraProps: Record<string, any>) =>
  function (Component: FunctionComponent<any>) {
    return function WrappedComponent(props: any) {
      const propsNext = { ...props, ...extraProps }
      return <Component {...propsNext} />
    }
  }
