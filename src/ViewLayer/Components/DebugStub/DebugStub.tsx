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
  const { styleProps = { DebugStub: {} }, onLayout } = props

  const propsOut: DebugStubPropsOutType = {}

  return (
    <View style={[styleProps.DebugStub]} onLayout={onLayout} testID='DebugStub'>
      <Text testID='text'>DebugStub</Text>
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
