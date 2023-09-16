import { registerRootComponent } from 'expo'
import { AppRegistry, Platform } from 'react-native'
import React, { StrictMode, useCallback } from 'react'
import { Provider } from 'react-redux'
import { store } from './DataLayer/store'
import { RouterScreensConfig } from './RouterScreensConfig'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

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

  console.info('App [45]', {
    fontsLoaded,
    fontError,
    '!!fontError': !!fontError,
    '!fontError': !fontError,
  })

  // return (
  //   <StrictMode>
  //     <Provider store={store}>
  //       <StubDebug {...propsOut.stubDebugProps} />
  //     </Provider>
  //   </StrictMode>
  // )

  // return (
  //   <StrictMode>
  //     <StubDebug {...propsOut.stubDebugProps} />
  //   </StrictMode>
  // )

  return (
    <StrictMode>
      <Provider store={store}>
        <RouterScreensConfig />
      </Provider>
    </StrictMode>
  )
}

AppRegistry.registerComponent('X', () => App)

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('X')
  AppRegistry.runApplication('X', { rootTag })

  registerRootComponent(App)
}

/*

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({ ... }); 

*/
