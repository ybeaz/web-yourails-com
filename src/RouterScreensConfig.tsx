import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { routes } from './Constants/routes.const'
// import { StubInProgess } from './ViewLayer/Screens/StubInProgess'
import { Error404 } from './ViewLayer/Screens/Error404'
import { TemplateScreen } from './ViewLayer/Screens/TemplateScreen'

const PAGES = {
  TemplateScreen,
  // StubInProgess,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const demoHostName = 'r1.userto.com'
  const demoPath = '/demo-youtube-learn.html'
  const rootPath = location.hostname === demoHostName ? demoPath : ''

  interface IGetRoutes {
    (
      routesArg: {
        path: string
        strict?: boolean
        exact?: boolean
        page: string
        themeDafault: string
      }[]
    ): ReactElement[]
  }

  const getRoutes: IGetRoutes = routesArg =>
    routesArg.map(route => {
      const { path, exact, page, themeDafault } = route
      const Page = PAGES[page]
      return (
        <Route
          key={path}
          exact={exact}
          path={path}
          render={routeProps => {
            const pageProps = { rootPath, routeProps, themeDafault }
            // console.info('RouterScreensConfig [52]', {
            //   pageProps,
            //   rootPath,
            //   routeProps,
            //   hostname: location.hostname,
            //   location,
            // })
            return <Page {...pageProps} />
          }}
        />
      )
    })

  const redirects = [
    { from: `${demoPath}`, to: `${demoPath}/home`, exact: true },
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
    redirectsArg.map(redirect => {
      const { from: fromPath, to: toPath } = redirect
      const from = `${fromPath}`
      const to = `${toPath}`
      return (() => {
        // console.info('RouterProvider [65] a redirect', {
        //   rootPath,
        //   hostname: location.hostname,
        //   location,
        // })
        return <Redirect {...{ key: `${from}-${to}`, from, to }} />
      })()
    })

  const getError404Route: Function = (): ReactElement => {
    return (
      <Route
        component={() => {
          //  console.info('RouterProvider [86] Error 404', { location })
          return <Error404 />
        }}
      />
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        {getRoutes(routes)}
        {getRedirects(redirects)}
        {getError404Route()}
      </Switch>
    </BrowserRouter>
  )
}
