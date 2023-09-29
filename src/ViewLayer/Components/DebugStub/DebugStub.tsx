import React from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  DebugStubPropsType,
  DebugStubPropsOutType,
  DebugStubComponentType,
  DebugStubType,
} from './DebugStubTypes'
import { styles } from './DebugStubStyles'

/**
 * @description Component to render
 * @import import { DebugStub, DebugStubPropsType, DebugStubPropsOutType, DebugStubType } 
             from '../Components/DebugStub/DebugStub'
 */
const DebugStubComponent: DebugStubComponentType = props => {
  const { captureText, styleProps = { DebugStub: {} }, onLayout } = props

  console.info('DebugStub [22]', { captureText })

  const propsOut: DebugStubPropsOutType = {}

  return (
    <View style={[styleProps.DebugStub]} onLayout={onLayout} testID='DebugStub'>
      <Text testID='captureText'>{captureText}</Text>
    </View>
  )
}

export const DebugStub: DebugStubType = React.memo(DebugStubComponent)

export type {
  DebugStubPropsType,
  DebugStubPropsOutType,
  DebugStubComponentType,
  DebugStubType,
}
