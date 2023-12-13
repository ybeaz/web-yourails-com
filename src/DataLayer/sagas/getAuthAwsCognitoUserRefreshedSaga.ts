import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'

import {
  getResponseGraphqlAsync,
  GetResponseGraphqlAsyncOptionsType,
} from '../../../../yourails_communication_layer'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { ClientAppType } from '../../@types/ClientAppType'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'

export function* getAuthAwsCognitoUserRefreshed(): Iterable<any> {
  const refresh_token = localStorage.getItem('refresh_token')

  try {
    const envType = getDetectedEnv()

    const variables = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri: CLIENTS_URI[envType],
        client_app: ClientAppType['CHAT_AI'],
      },
    }

    const userIdDataAwsCognito: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'getAuthAwsCognitoUserRefreshed',
    })

    if (!userIdDataAwsCognito || !userIdDataAwsCognito?.sub)
      getDeletedObjFromLocalStorage({ refresh_token })

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getSetObjToLocalStorage(userIdDataAwsCognito)
  } catch (error: any) {
    console.log('ERROR getAuthAwsCognitoUserRefreshedSaga', {
      error: error.message,
    })
  }
}

/**
 * @description Function to getAuthAwsCognitoUserRefreshedSaga
 * @import import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
 */
export default function* getAuthAwsCognitoUserRefreshedSaga() {
  yield takeEvery(
    [actionAsync.GET_AUTH_AWS_COGNITO_USER_REFRESHED.REQUEST().type],
    getAuthAwsCognitoUserRefreshed
  )
}
