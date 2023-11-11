import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'
import { ClientHttpType } from '../../@types/ClientHttpType'
import { MethodHttpType } from '../../@types/MethodHttpType'
import { getGraphqlResponseAsync } from '../../CommunicationLayer/getGraphqlResponseAsync'

function* getRevokedUserAuthAwsCognito(params: any): Iterable<any> {
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
      resolveGraphqlName: 'getRevokedUserAuthAwsCognito',
    })

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getDeletedObjFromLocalStorage({
      ...userIdDataAwsCognito,
      refresh_token: null,
    })
  } catch (error: any) {
    console.log('ERROR getRevokedUserAuthAwsCognitoSaga', {
      error: error.message,
    })
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
