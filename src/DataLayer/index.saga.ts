import { all, fork } from 'redux-saga/effects'

import templateSaga from './sagas/templateSaga'
import addConversationSaga from './sagas/addConversationSaga'
import initLoadingSaga from './sagas/initLoadingSaga'

export default function* indexSaga() {
  yield all([fork(templateSaga)])
  yield all([fork(addConversationSaga)])
  yield all([fork(initLoadingSaga)])
}
