import React from 'react'
import { Button, SafeAreaView } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  DebugHomePropsType,
  DebugHomePropsOutType,
  DebugHomeComponentType,
  DebugHomeType,
} from './DebugHomeTypes'
import { styles } from './DebugHomeStyles'

/**
 * @description Component to render
 * @import import { DebugHome, DebugHomePropsType, DebugHomePropsOutType, DebugHomeType } 
             from '../Components/DebugHome/DebugHome'
 */
const DebugHomeComponent: DebugHomeComponentType = props => {
  const {
    styleProps = { DebugHome: {} },
    onLayout,
    navigation,
    titleText,
  } = props

  const propsOut: DebugHomePropsOutType = {}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onLayout={onLayout}
    >
      <Button
        title='Go to Profile'
        onPress={() => {
          console.info('App [88]', 'to Profile')
          navigation.navigate('Profile')
        }}
      />
      <Text>{titleText}</Text>
      {/* <StubDebug {...propsOut.stubDebugProps} /> */}
    </SafeAreaView>
  )
}

export const DebugHome: DebugHomeType = React.memo(DebugHomeComponent)

export type {
  DebugHomePropsType,
  DebugHomePropsOutType,
  DebugHomeComponentType,
  DebugHomeType,
}
