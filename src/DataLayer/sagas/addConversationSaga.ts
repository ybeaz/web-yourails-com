import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnectorAxios } from '../../CommunicationLayer/template.connector'
import { GetRecipeDocument } from '../../types/graphql'
import { apolloClient } from '../../CommunicationLayer/clients/apolloClient'
import { conversations } from '../../ContentMock/conversationsMock'
import { messages } from '../../ContentMock/messagesMock'

function* addConversation(input: any) {
  const { data: variables } = input

  try {
    yield put(actionSync.ADD_CONVERSATIONS({ conversations }))
    yield put(actionSync.ADD_MESSAGES({ messages }))
  } catch (error) {
    const err: any = error
  }
}

export default function* addConversationSaga() {
  yield takeEvery(
    [actionAsync.ADD_CONVERSATION_ASYNC.REQUEST().type],
    addConversation
  )
}
