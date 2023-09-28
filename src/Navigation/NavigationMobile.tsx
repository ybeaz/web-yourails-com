import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { DebugHome } from '../ViewLayer/Components/DebugHome/DebugHome'
import { DebugProfile } from '../ViewLayer/Components/DebugProfile/DebugProfile'
import { NavigationMobileOutPropsType } from './NavigationTypes'
import { ChatCardsScreen } from '../ViewLayer/Screens/ChatCardsScreen/ChatCardsScreen'
import { ChatSpaceScreen } from '../ViewLayer/Screens/ChatSpaceScreen/ChatSpaceScreen'

const Stack = createNativeStackNavigator()

type NavigationMobilePropsType = {
  onLayout: () => void
}

export const NavigationMobile = (props: NavigationMobilePropsType) => {
  const { onLayout } = props

  /* Hermes is a plugin to Flipper */
  // @ts-expect-error
  const isHermes = () => !!global.HermesInternal
  console.info('Is Hermes enabled ' + isHermes())

  const propsOut: NavigationMobileOutPropsType = {
    chatCardsScreenProps: {
      onLayout,
    },
    chatSpaceScreenProps: {
      onLayout,
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ChatCardsScreen'>
        <Stack.Screen name='ChatCardsScreen' options={{ headerShown: false }}>
          {props => (
            <ChatCardsScreen
              {...{ ...props, ...propsOut.chatCardsScreenProps }}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name='ChatSpaceScreen' options={{ headerShown: true }}>
          {props => (
            <ChatSpaceScreen
              {...{ ...props, ...propsOut.chatSpaceScreenProps }}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
