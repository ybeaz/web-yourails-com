import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getUserIdDataAwsCognitoConnector } from '../../CommunicationLayer/getUserIdDataAwsCognitoConnector'
import { CLIENTS, ClientsType } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'

import { getUserIdDataAwsCognitoQuery } from '../../CommunicationLayer/graphql/getUserIdDataAwsCognitoQuery'

function* getUserIdDataAwsCognito(input: any) {
  const {
    data: { code },
  } = input
  console.info('getUserIdDataAwsCognitoSaga [11]', {
    code,
    input,
    getUserIdDataAwsCognitoQuery,
  })

  try {
    const envType: string = getDetectedEnv()
    const redirect_uri = CLIENTS[envType as keyof ClientsType] as string

    const variables = {
      userIdDataAwsCognitoInput: {
        code,
        redirect_uri,
      },
    }

    const { client, params } = getUserIdDataAwsCognitoConnector(variables)

    const {
      data: {
        data: { getUserIdDataAwsCognito: idDataAwsCognito },
      },
    } = yield client.post('', params)

    console.info('getUserIdDataAwsCognitoSaga [45]', { idDataAwsCognito })
  } catch (error) {
    const err: any = error
  }
}

/**
 * @description Function to getUserIdDataAwsCognitoSaga
 * @import import getUserIdDataAwsCognitoSaga from './sagas/getUserIdDataAwsCognitoSaga'
 */
export default function* getUserIdDataAwsCognitoSaga() {
  yield takeEvery(
    [actionAsync.GET_USERID_DATA_AWS_COGNITO_ASYNC.REQUEST().type],
    getUserIdDataAwsCognito
  )
}
