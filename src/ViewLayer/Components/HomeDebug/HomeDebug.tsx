import React from 'react'
import { Button, SafeAreaView } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  HomeDebugPropsType,
  HomeDebugPropsOutType,
  HomeDebugComponentType,
  HomeDebugType,
} from './HomeDebugTypes'
import { styles } from './HomeDebugStyles'

/**
 * @description Component to render
 * @import import { HomeDebug, HomeDebugPropsType, HomeDebugPropsOutType, HomeDebugType } 
             from '../Components/HomeDebug/HomeDebug'
 */
const HomeDebugComponent: HomeDebugComponentType = props => {
  const {
    styleProps = { HomeDebug: {} },
    onLayout,
    navigation,
    titleText,
  } = props

  const propsOut: HomeDebugPropsOutType = {}

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

export const HomeDebug: HomeDebugType = React.memo(HomeDebugComponent)

export type {
  HomeDebugPropsType,
  HomeDebugPropsOutType,
  HomeDebugComponentType,
  HomeDebugType,
}
