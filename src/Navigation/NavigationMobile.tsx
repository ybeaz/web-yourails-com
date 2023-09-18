import React from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { DebugHome } from '../ViewLayer/Components/DebugHome/DebugHome'
import { DebugProfile } from '../ViewLayer/Components/DebugProfile/DebugProfile'

const Stack = createNativeStackNavigator()

type NavigationMobilePropsType = {
  onLayout: () => void
}

export const NavigationMobile = (props: NavigationMobilePropsType) => {
  const { onLayout } = props

  // @ts-expect-error
  const isHermes = () => !!global.HermesInternal
  console.info('Is Hermes enabled ' + isHermes())

  const homeDebugProps = {
    onLayout,
    titleText: 'New Title 2',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home'>
          {props => <DebugHome {...{ ...props, ...homeDebugProps }} />}
        </Stack.Screen>
        <Stack.Screen name='Profile'>
          {props => <DebugProfile {...{ ...props, ...homeDebugProps }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
