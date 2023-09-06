import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { messages } from '../../ContentMock/messagesMock'

function* addMessagesSaga(): Iterable<any> {
  try {
    yield put(actionSync.ADD_MESSAGES({ messages }))
  } catch (error: any) {
    console.log('ERROR addMessagesSaga', { error: error.message })
  }
}

export default function* addMessagesSagaSaga() {
  yield takeEvery(
    [actionAsync.ADD_MESSAGES_ASYNC.REQUEST().type],
    addMessagesSaga
  )
}
