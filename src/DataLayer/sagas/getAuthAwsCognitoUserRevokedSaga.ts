import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ClientAppType } from '../../@types/ClientAppType'

function* getAuthAwsCognitoUserRevoked(): Iterable<any> {
  const refresh_token = localStorage.getItem('refresh_token') || ''

  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS_URI[envType]

    const variables = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
        client_app: ClientAppType['CHAT_AI'],
      },
    }

    const userIdDataAwsCognito: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'getAuthAwsCognitoUserRevoked',
    })

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getDeletedObjFromLocalStorage({
      ...userIdDataAwsCognito,
    })
  } catch (error: any) {
    console.log('ERROR getAuthAwsCognitoUserRevokedSaga', {
      error: error.message,
    })
  } finally {
    getDeletedObjFromLocalStorage({
      refresh_token: null,
    })
  }
}

/**
 * @description Function to getAuthAwsCognitoUserRevokedSaga
 * @import import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
 */
export default function* getAuthAwsCognitoUserRevokedSaga() {
  yield takeEvery(
    [actionAsync.GET_AUTH_AWS_COGNITO_USER_REVOKED.REQUEST().type],
    getAuthAwsCognitoUserRevoked
  )
}
