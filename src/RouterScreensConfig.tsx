import React, { ReactElement } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { SafeAreaView } from 'react-native'

import { Text } from './ViewLayer/Components/Text/Text'
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
                <HashRouter basename='' hashType='noslash'>
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
    // { from: `/`, to: `/k#@rome`, exact: true, strict: true },
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
            <SafeAreaView>
              <Text>Error404</Text>
            </SafeAreaView>
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
