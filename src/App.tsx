import { registerRootComponent } from 'expo'
import { AppRegistry, Platform } from 'react-native'
import React, { StrictMode, useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { Button, SafeAreaView } from 'react-native'

import { Provider } from 'react-redux'
import { store } from './DataLayer/store'
import { RouterScreensConfig } from './RouterScreensConfig'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import {
  HomeDebug,
  HomeDebugPropsType,
  HomeDebugPropsOutType,
  HomeDebugType,
} from './ViewLayer/Components/HomeDebug/HomeDebug'
import {
  StubDebug,
  StubDebugPropsType,
  StubDebugPropsOutType,
  StubDebugType,
} from './ViewLayer/Components/StubDebug/StubDebug'

SplashScreen.preventAutoHideAsync()

function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Regular': require('./Assets/fonts/Roboto-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded) {
    return null
  }

  console.info('App [139]', { 'Platform.OS': Platform.OS })

  if (Platform.OS === 'web') {
    return (
      <StrictMode>
        <Provider store={store}>
          <RouterScreensConfig />
        </Provider>
      </StrictMode>
    )
  } else {
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

    const homeDebugProps = {
      onLayout: onLayoutRootView,
      titleText: 'New Title 2',
    }

    return (
      <StrictMode>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Home'>
                {props => <HomeDebug {...{ ...props, ...homeDebugProps }} />}
              </Stack.Screen>
              <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </StrictMode>
    )
  }
}

if (Platform.OS === 'web') {
  registerRootComponent(App)
} else {
  AppRegistry.registerComponent('main', () => App)
}
