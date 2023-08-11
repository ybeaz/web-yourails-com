import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getRefreshedUserAuthAwsCognitoConnector } from '../../CommunicationLayer/getRefreshedUserAuthAwsCognitoConnector'
import { CLIENTS } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'

export function* getRefreshedUserAuthAwsCognito(input: any) {
  const {
    data: { refresh_token },
  } = input

  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS[envType]

    const variables = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
      },
    }

    const { client, params } =
      getRefreshedUserAuthAwsCognitoConnector(variables)

    const {
      data: {
        data: { getRefreshedUserAuthAwsCognito: userIdDataAwsCognito },
      },
    } = yield client.post('', params)

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getSetObjToLocalStorage(userIdDataAwsCognito)
  } catch (error) {
    const err: any = error
    console.log('ERROR getRefreshedUserAuthAwsCognitoSaga', { err })
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
