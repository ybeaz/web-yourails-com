import React from 'react'
import * as SplashScreen from 'expo-splash-screen'
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

  // @ts-expect-error
  const isHermes = () => !!global.HermesInternal
  console.info('Is Hermes enabled ' + isHermes())

  // TODO Remove debug props
  const debugHomeProps = {
    onLayout,
    titleText: 'New Title 2',
  }
  // {props => <DebugHome {...{ ...props, ...debugHomeProps }} />}

  const debugProfileProps = {
    onLayout,
    titleText: 'New Title 2',
  }

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
      <Stack.Navigator>
        <Stack.Screen name='ChatCardsScreen'>
          {props => (
            <ChatCardsScreen
              {...{ ...props, ...propsOut.chatCardsScreenProps }}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name='ChatSpaceScreen'>
          {props => (
            <ChatSpaceScreen
              {...{ ...props, ...propsOut.chatSpaceScreenProps }}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name='Profile'>
          {props => <DebugProfile {...{ ...props, ...debugProfileProps }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
