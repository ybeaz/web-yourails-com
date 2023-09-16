import React from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  StubDebugPropsType,
  StubDebugPropsOutType,
  StubDebugComponentType,
  StubDebugType,
} from './StubDebugTypes'
import { styles } from './StubDebugStyles'

/**
 * @description Component to render
 * @import import { StubDebug, StubDebugPropsType, StubDebugPropsOutType, StubDebugType } 
             from '../Components/StubDebug/StubDebug'
 */
const StubDebugComponent: StubDebugComponentType = props => {
  const { styleProps = { StubDebug: {} }, onLayout } = props

  const propsOut: StubDebugPropsOutType = {}

  return (
    <View style={[styleProps.StubDebug]} onLayout={onLayout} testID='StubDebug'>
      <Text testID='text'>StubDebug</Text>
    </View>
  )
}

export const StubDebug: StubDebugType = React.memo(StubDebugComponent)

export type {
  StubDebugPropsType,
  StubDebugPropsOutType,
  StubDebugComponentType,
  StubDebugType,
}
