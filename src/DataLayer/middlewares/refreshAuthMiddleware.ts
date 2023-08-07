import { Middleware } from '@reduxjs/toolkit'

/**
 * @description Middleware to refreshAuthMiddleware
 * @import import { refreshAuthMiddleware } from './middlewares/refreshAuthMiddleware'
 */

export const refreshAuthMiddleware: Middleware = store => next => action => {
  console.log('Dispatching:', action)
  const result = next(action)
  console.log('Updated state:', store.getState())
  return result
}
