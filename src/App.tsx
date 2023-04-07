import { registerRootComponent } from 'expo'
import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { store } from './DataLayer/store'
import { RouterScreensConfig } from './RouterScreensConfig'
import { PageChatsWholeScreen } from './ViewLayer/Screens/PageChatsWholeScreen/PageChatsWholeScreen'

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
