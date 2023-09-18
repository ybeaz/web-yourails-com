import React from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, SafeAreaView } from 'react-native'

import {
  HomeDebug,
  HomeDebugPropsType,
  HomeDebugPropsOutType,
  HomeDebugType,
} from '../ViewLayer/Components/HomeDebug/HomeDebug'

const Stack = createNativeStackNavigator()

function ProfileScreen({ navigation }: any) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Button
        title='Go back'
        onPress={() => {
          console.info('App [104]', 'to goBack')
          navigation.goBack()
        }}
      />
    </SafeAreaView>
  )
}

type NavigationMobilePropsType = {
  onLayout: () => void
}

export const NavigationMobile = (props: NavigationMobilePropsType) => {
  const { onLayout } = props

  const homeDebugProps = {
    onLayout,
    titleText: 'New Title 2',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home'>
          {props => <HomeDebug {...{ ...props, ...homeDebugProps }} />}
        </Stack.Screen>
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
