import React, { ReactElement } from 'react'
import { SafeAreaView as SafeAreaViewWeb, View } from 'react-native'
import { SafeAreaView as SafeAreaViewMobile } from 'react-native-safe-area-context'

import { withParamsMediaYrl } from '../../../YrlNativeViewLibrary'

import {
  LayoutScreenPropsType,
  LayoutScreenPropsOutType,
  LayoutScreenComponentType,
  LayoutScreenType,
} from './LayoutScreenTypes'
import { style } from './LayoutScreenStyles'

/**
 * @import import { LayoutScreen } from '../Components/LayoutScreen/LayoutScreen'
 */
const LayoutScreenComponent: LayoutScreenComponentType = props => {
  const {
    styleProps = {
      LayoutScreen: {},
      layoutNavigationTop: {},
      layoutMainContent: {},
      layoutNavigationBottom: {},
    },
    isActive,
    children,
    onLayout,
    platformOS,
    insets,
  } = props

  const SafeAreaView =
    platformOS === 'web' ? SafeAreaViewWeb : SafeAreaViewMobile

  const propsOut: LayoutScreenPropsOutType = {}

  return isActive ? (
    <SafeAreaView
      style={[
        style.LayoutScreen,
        { marginTop: insets.top },
        styleProps.LayoutScreen,
      ]}
      onLayout={onLayout}
      testID='LayoutScreen'
    >
      <View
        style={[style.layoutNavigationTop, styleProps.layoutNavigationTop]}
        testID='layoutNavigationTop'
      >
        {children.length === undefined ? children : children[0]}
      </View>

      <View
        style={[style.layoutMainContent, styleProps.layoutMainContent]}
        testID='layoutMainContent'
      >
        {children[1]}
      </View>
      <View
        style={[
          style.layoutNavigationBottom,
          styleProps.layoutNavigationBottom,
        ]}
        testID='layoutNavigationBottom'
      >
        {children[2]}
      </View>
    </SafeAreaView>
  ) : (
    <></>
  )
}

export const LayoutScreen: any = withParamsMediaYrl(
  React.memo(LayoutScreenComponent)
)

export type {
  LayoutScreenPropsType,
  LayoutScreenPropsOutType,
  LayoutScreenType,
}
