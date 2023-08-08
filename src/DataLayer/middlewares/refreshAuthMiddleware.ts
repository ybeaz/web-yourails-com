import { Middleware } from '@reduxjs/toolkit'

import { getDebouncedFunc } from '../..//Shared/getDebouncedFunc'
import { actionAsync } from '../../DataLayer/index.action'

const getItTested = (...args: any) => {
  console.log('Running:', { time: new Date().toLocaleString(), args })
}

const debouncedFunc = getDebouncedFunc(getItTested, 2000)

/**
 * @description Middleware to refreshAuthMiddleware
 * @import import { refreshAuthMiddleware } from './middlewares/refreshAuthMiddleware'
 */
export const refreshAuthMiddleware: Middleware = store => next => action => {
  debouncedFunc(action)

  const result = next(action)
  // console.log('Updated state:', store.getState())
  return result
}
