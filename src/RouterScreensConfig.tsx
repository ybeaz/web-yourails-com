import React from 'react'
import {
  useRouteError,
  RouterProvider,
  createBrowserRouter,
  RouteObject as RouteObjectType,
} from 'react-router-dom'

import { PageChatsWholeScreen } from './ViewLayer/Screens/PageChatsWholeScreen/PageChatsWholeScreen'

function ErrorBoundary() {
  let error = useRouteError()
  console.error(error)
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>
}

const routeObject: RouteObjectType[] = [
  {
    path: '/',
    element: <PageChatsWholeScreen />,
    children: [],
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/:urlParam1?/:urlParam2?/:urlParam3?',
    element: <PageChatsWholeScreen />,
    children: [],
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <div>No Match</div>,
    children: [],
    errorElement: <ErrorBoundary />,
  },
]

export const router = createBrowserRouter(routeObject)

/**
 * @description Component to provide routing in one place
 * @links https://v5.reactrouter.com/web/api/
 */
export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  return <RouterProvider router={router} />
}
