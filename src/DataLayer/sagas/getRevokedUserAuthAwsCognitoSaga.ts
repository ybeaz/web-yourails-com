import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getRevokedUserAuthAwsCognitoConnector } from '../../CommunicationLayer/getRevokedUserAuthAwsCognitoConnector'
import { CLIENTS, ClientsType } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'

function* getRevokedUserAuthAwsCognito(input: any) {
  const {
    data: { refresh_token },
  } = input

  try {
    const envType: string = getDetectedEnv()
    const redirect_uri = CLIENTS[envType as keyof ClientsType] as string

    const variables = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
      },
    }

    const { client, params } = getRevokedUserAuthAwsCognitoConnector(variables)

    const {
      data: {
        data: { getRevokedUserAuthAwsCognito: userIdDataAwsCognito },
      },
    } = yield client.post('', params)

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getDeletedObjFromLocalStorage({
      ...userIdDataAwsCognito,
      refresh_token: null,
    })
  } catch (error) {
    const err: any = error
    console.log('ERROR getRevokedUserAuthAwsCognitoSaga', { err })
  }
}

/**
 * @description Function to getRevokedUserAuthAwsCognitoSaga
 * @import import getRevokedUserAuthAwsCognitoSaga from './sagas/getRevokedUserAuthAwsCognitoSaga'
 */
export default function* getRevokedUserAuthAwsCognitoSaga() {
  yield takeEvery(
    [actionAsync.GET_REVOKED_USER_AUTH_AWS_COGNITO_ASYNC.REQUEST().type],
    getRevokedUserAuthAwsCognito
  )
}
