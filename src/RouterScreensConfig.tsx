import React, { ReactElement } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Text, View } from 'react-native'

import { routes, RouteType } from './Constants/routes.const'
import { PageChatsWholeScreen } from './ViewLayer/Screens/PageChatsWholeScreen/PageChatsWholeScreen'

interface IGetRoutes {
  (routesArg: RouteType[]): ReactElement[]
}

const PAGES: Record<string, any> = {
  PageChatsWholeScreen,
  // Error404,
}

/**
 * @description Component to provide routing in one place
 * @links https://v5.reactrouter.com/web/api/
 */
export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const rootPath = ''

  const getRoutes: IGetRoutes = routesArg =>
    routesArg.map((route, index: number) => {
      const { path, exact, page, isHashRouter, themeDafault } = route
      const Page = PAGES[page]
      return (
        <Route
          key={`route-${index}`}
          exact={exact}
          path={path}
          render={routeProps => {
            const pageProps = { rootPath, routeProps, themeDafault }
            if (isHashRouter == true) {
              return (
                <HashRouter basename='@rome_sfba' hashType='noslash'>
                  <Page {...pageProps} />
                </HashRouter>
              )
            } else {
              return <Page {...pageProps} />
            }
          }}
        />
      )
    })

  const redirects = [
    { from: `/`, to: `/k`, exact: true, strict: true },
    { from: `/home2`, to: `home`, exact: true },
  ]
  interface IGetRedirects {
    (
      redirectsArg: {
        from: string
        to: string
        strict?: boolean
        exact?: boolean
      }[]
    ): ReactElement[]
  }

  const getRedirects: IGetRedirects = redirectsArg =>
    redirectsArg.map((redirect, index: number) => {
      const { from: fromPath, to: toPath, exact, strict } = redirect
      const from = `${fromPath}`
      const to = `${toPath}`
      return (() => {
        return <Redirect {...{ key: `redirect-${index}`, from, to, exact }} />
      })()
    })

  const getError404Route: Function = (): ReactElement => {
    return (
      <Route
        component={() => {
          return (
            <View>
              <Text>Error404</Text>
            </View>
          ) // <Error404 />
        }}
      />
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        {/* <HashRouter basename='/admin' /> */}
        {getRoutes(routes)}
        {getRedirects(redirects)}
        {getError404Route()}
      </Switch>
    </BrowserRouter>
  )
}
