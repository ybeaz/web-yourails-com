import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnectorAxios } from '../../CommunicationLayer/template.connector'
import { GetRecipeDocument } from '../../types/graphql'
import { apolloClient } from '../../CommunicationLayer/clients/apolloClient'
import { messages } from '../../ContentMock/messagesMock'

function* addMessagesSaga(input: any) {
  const { data: variables } = input

  try {
    yield put(actionSync.ADD_MESSAGES({ messages }))
  } catch (error) {
    const err: any = error
  }
}

export default function* addMessagesSagaSaga() {
  yield takeEvery(
    [actionAsync.ADD_MESSAGES_ASYNC.REQUEST().type],
    addMessagesSaga
  )
}
