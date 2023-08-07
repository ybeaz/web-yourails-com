import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getRefreshedUserAuthAwsCognitoConnector } from '../../CommunicationLayer/getRefreshedUserAuthAwsCognitoConnector'
import { CLIENTS, ClientsType } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'

function* getRefreshedUserAuthAwsCognito(input: any) {
  const {
    data: { refresh_token },
  } = input
  console.info('getRefreshedUserAuthAwsCognitoSaga [11]', {
    refresh_token,
    input,
  })

  try {
    const envType: string = getDetectedEnv()
    const redirect_uri = CLIENTS[envType as keyof ClientsType] as string

    const variables = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
      },
    }
    console.info('getRefreshedUserAuthAwsCognitoSaga [30]', { variables })
    const { client, params } =
      getRefreshedUserAuthAwsCognitoConnector(variables)

    const {
      data: {
        data: { getRefreshedUserAuthAwsCognito: userIdDataAwsCognito },
      },
    } = yield client.post('', params)
    console.info('getRefreshedUserAuthAwsCognitoSaga [38]', {
      userIdDataAwsCognito,
    })

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    console.info('getRefreshedUserAuthAwsCognitoSaga [45]', {
      userIdDataAwsCognito,
    })
  } catch (error) {
    const err: any = error
    console.info('ERROR getRefreshedUserAuthAwsCognitoSaga', { err })
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
