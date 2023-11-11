import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { ClientHttpType } from '../../@types/ClientHttpType'
import { MethodHttpType } from '../../@types/MethodHttpType'
import { getGraphqlResponseAsync } from '../../CommunicationLayer/getGraphqlResponseAsync'

export function* getRefreshedUserAuthAwsCognito(params: any): Iterable<any> {
  const {
    data: { refresh_token },
  } = params

  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS[envType]

    const variables = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
      },
    }

    const userIdDataAwsCognito: any = yield getGraphqlResponseAsync({
      clientHttpType: ClientHttpType['apolloClient'],
      methodHttpType: MethodHttpType['query'],
      variables,
      resolveGraphqlName: 'getRefreshedUserAuthAwsCognito',
    })

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getSetObjToLocalStorage(userIdDataAwsCognito)
  } catch (error: any) {
    console.log('ERROR getRefreshedUserAuthAwsCognitoSaga', {
      error: error.message,
    })
  }
}

/**
 * @description Function to getRefreshedUserAuthAwsCognitoSaga
 * @import import getRefreshedUserAuthAwsCognitoSaga from './sagas/getRefreshedUserAuthAwsCognitoSaga'
 */
export default function* getRefreshedUserAuthAwsCognitoSaga() {
  yield takeEvery(
    [actionAsync.GET_REFRESHED_USER_AUTH_AWS_COGNITO_ASYNC.REQUEST().type],
    getRefreshedUserAuthAwsCognito
  )
}
