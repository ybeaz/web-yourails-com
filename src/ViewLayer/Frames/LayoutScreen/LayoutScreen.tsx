import React from 'react'
import { SafeAreaView, View } from 'react-native'

import { LayoutScreenType, LayoutScreenPropsOutType } from './LayoutScreenTypes'
import { style } from './LayoutScreenStyles'

/**
 * @import import { LayoutScreen } from '../Components/LayoutScreen/LayoutScreen'
 */
const LayoutScreenComponent: LayoutScreenType = props => {
  const { styleProps = { LayoutScreen: {} }, children } = props

  const propsOut: LayoutScreenPropsOutType = {}

  return (
    <SafeAreaView style={[style.LayoutScreen]} testID='LayoutScreenPageChats'>
      <View style={[style.layoutNavigationTop]} testID='layoutNavigationTop'>
        {children[0]}
      </View>

      <View style={[style.layoutMainContent]} testID='layoutMainContent'>
        {children[1]}
      </View>
      <View
        style={[style.layoutNavigationBottom]}
        testID='layoutNavigationBottom'
      >
        {children[2]}
      </View>
    </SafeAreaView>
  )
}

export const LayoutScreen = React.memo(LayoutScreenComponent)
