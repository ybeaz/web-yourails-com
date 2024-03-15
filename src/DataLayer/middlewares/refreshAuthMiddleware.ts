import { Middleware } from '@reduxjs/toolkit'
import { Platform } from 'react-native'

import { AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY } from '../../Constants/aws.const'
import { getDebouncedFunc } from '../..//Shared/getDebouncedFunc'
import { actionAsync } from '../../DataLayer/index.action'

/**
 * @description Function to run refreshAuthMiddleware
 * @import import { getRefreshedAuthAwsCongito } from './middlewares/getRefreshedAuthAwsCongito'
 */
const getRefreshedAuthAwsCongito = (...args: any) => {
  const store = args[0]
  const { dispatch } = store
  dispatch(actionAsync.GET_AUTH_AWS_COGNITO_USER_REFRESHED.REQUEST())
}

const debouncedFunc = getDebouncedFunc(
  getRefreshedAuthAwsCongito,
  AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY
)

/**
 * @description Middleware to refreshAuthMiddleware
 * @import import { refreshAuthMiddleware } from './middlewares/refreshAuthMiddleware'
 */
export const refreshAuthMiddleware: Middleware = store => next => action => {
  // TODO Implement localStorage for ios and android
  if (Platform.OS === 'web') {
    const refresh_token = localStorage.getItem('refresh_token')
    if (refresh_token) debouncedFunc(store, refresh_token)
  }

  const result = next(action)
  return result
}
