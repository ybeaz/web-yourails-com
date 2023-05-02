import React from 'react'
import {
  useRouteError,
  RouterProvider,
  createBrowserRouter,
  Navigate,
  RouteObject as RouteObjectType,
} from 'react-router-dom'

import { withDelayYrl } from './YrlNativeViewLibrary'
import { PageChatsWholeScreen } from './ViewLayer/Screens/PageChatsWholeScreen/PageChatsWholeScreen'

const pathAfterStatic = window.location.pathname.split('/static/')[1]
const pathTo = `/static/${pathAfterStatic}`

function ErrorBoundary(props: any) {
  const { path } = props
  let error = useRouteError()
  console.error(error)
  // Uncaught ReferenceError: path is not defined
  return (
    <div>
      ErrorBoundary! <br />
      pathname: {`${window.location.pathname}`} <br /> path: {`${path}`}
      <br />
      error: {`${error}`}
    </div>
  )
}

const routeObject: RouteObjectType[] = [
  {
    path: '/:urlParam1?/:urlParam2?/static/media/*',
    element: <Navigate to={pathTo} replace />,
    // element: (
    //   <div>
    //     Caught it <br />
    //     pathname: {`${window.location.pathname}`} <br /> path:
    //     /:urlParam1?/:urlParam2?/static/media/*
    //   </div>
    // ),
    children: [],
    errorElement: <ErrorBoundary path='/:urlParam1?/static/media/*' />,
  },
  {
    path: '/',
    element: <PageChatsWholeScreen />,
    children: [],
    errorElement: <ErrorBoundary path='/' />,
  },
  {
    path: '/:urlParam1?/:urlParam2?/:urlParam3?',
    element: <PageChatsWholeScreen />,
    children: [],
    errorElement: <ErrorBoundary path='/:urlParam1?/:urlParam2?/:urlParam3?' />,
  },
  {
    path: '*',
    element: <div>No Match</div>,
    children: [],
    errorElement: <ErrorBoundary path='*' />,
  },
]

export const router = createBrowserRouter(routeObject)

/**
 * @description Component to provide routing in one place
 * @links https://v5.reactrouter.com/web/api/
 */
export const RouterScreensConfig: React.FunctionComponent<any> = withDelayYrl({
  delay: 100,
})(() => {
  return <RouterProvider router={router} />
})
