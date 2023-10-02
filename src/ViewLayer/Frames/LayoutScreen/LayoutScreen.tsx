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
      layoutScreenHeader: {},
      layoutScreenBody: {},
      layoutScreenFooter: {},
    },
    isActive,
    children,
    onLayout,
    platformOS,
    insets,
  } = props

  console.info('LayoutScreen [33]', { platformOS })

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
        style={[style.layoutScreenHeader, styleProps.layoutScreenHeader]}
        testID='layoutScreenHeader'
      >
        {children.length === undefined ? children : children[0]}
      </View>

      <View
        style={[style.layoutScreenBody, styleProps.layoutScreenBody]}
        testID='layoutScreenBody'
      >
        {children[1]}
      </View>
      <View
        style={[style.layoutScreenFooter, styleProps.layoutScreenFooter]}
        testID='layoutScreenFooter'
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
