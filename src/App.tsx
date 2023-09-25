import { registerRootComponent } from 'expo'
import { AppRegistry, Platform } from 'react-native'
import React, { StrictMode, useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from './DataLayer/store'
import { NavigationWeb } from './Navigation/NavigationWeb'
import { NavigationMobile } from './Navigation/NavigationMobile'

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

  if (Platform.OS === 'web') {
    return (
      <StrictMode>
        <Provider store={store}>
          <NavigationWeb />
        </Provider>
      </StrictMode>
    )
  } else {
    return (
      <StrictMode>
        <SafeAreaProvider>
          <Provider store={store}>
            <NavigationMobile onLayout={onLayoutRootView} />
          </Provider>
        </SafeAreaProvider>
      </StrictMode>
    )
  }
}

if (Platform.OS === 'web') {
  registerRootComponent(App)
} else {
  AppRegistry.registerComponent('main', () => App)
}
