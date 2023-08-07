import { all, fork } from 'redux-saga/effects'

import templateSaga from './sagas/templateSaga'
import getUserIdDataAwsCognitoSaga from './sagas/getUserIdDataAwsCognitoSaga'
import addCompetencyTagsSaga from './sagas/addCompetencyTagsSaga'
import addProjectsSaga from './sagas/addProjectsSaga'
import addMessagesSaga from './sagas/addMessagesSaga'
import initLoadingSaga from './sagas/initLoadingSaga'

export default function* indexSaga() {
  yield all([fork(templateSaga)])
  yield all([fork(getUserIdDataAwsCognitoSaga)])
  yield all([fork(addCompetencyTagsSaga)])
  yield all([fork(addProjectsSaga)])
  yield all([fork(addMessagesSaga)])
  yield all([fork(initLoadingSaga)])
}
