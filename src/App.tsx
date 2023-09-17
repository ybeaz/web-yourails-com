import { registerRootComponent } from 'expo'
import { AppRegistry, Platform } from 'react-native'
import React, { StrictMode, useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'

import { Provider } from 'react-redux'
import { store } from './DataLayer/store'
import { RouterScreensConfig } from './RouterScreensConfig'

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

  const propsOut: Record<string, any> = {
    stubDebugProps: {
      onLayout: onLayoutRootView,
      styleProps: {
        StubDebug: {
          fontSize: 30,
        },
      },
    },
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
    return (
      <StrictMode>
        <Provider store={store}>
          <NavigationContainer>
            <StubDebug {...propsOut.stubDebugProps} />
          </NavigationContainer>
        </Provider>
      </StrictMode>
    )
  }
}

AppRegistry.registerComponent('main', () => App)

if (Platform.OS === 'web') {
  console.error('App [78]', 'clean')
  // const rootTag =
  //   document.getElementById('root') || document.getElementById('X')
  // AppRegistry.runApplication('main', { rootTag })

  registerRootComponent(App)
}
