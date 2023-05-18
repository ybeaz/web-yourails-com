import { all, fork } from 'redux-saga/effects'

import templateSaga from './sagas/templateSaga'
import addCompetencyTagsSaga from './sagas/addCompetencyTagsSaga'
import addProjectsSaga from './sagas/addProjectsSaga'
import addConversationSaga from './sagas/addConversationSaga'
import initLoadingSaga from './sagas/initLoadingSaga'

export default function* indexSaga() {
  yield all([fork(templateSaga)])
  yield all([fork(addCompetencyTagsSaga)])
  yield all([fork(addProjectsSaga)])
  yield all([fork(addConversationSaga)])
  yield all([fork(initLoadingSaga)])
}
