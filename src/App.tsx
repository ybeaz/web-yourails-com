import { registerRootComponent } from 'expo'
import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './DataLayer/store'
import { RouterScreensConfig } from './RouterScreensConfig'

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <RouterScreensConfig />
      </Provider>
    </StrictMode>
  )
}

registerRootComponent(App)
