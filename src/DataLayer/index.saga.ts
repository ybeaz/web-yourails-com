import { all, fork } from 'redux-saga/effects'

import templateSaga from './sagas/templateSaga'
import getProfilesSaga from './sagas/getProfilesSaga'
import getRevokedUserAuthAwsCognitoSaga from './sagas/getRevokedUserAuthAwsCognitoSaga'
import getRefreshedUserAuthAwsCognitoSaga from './sagas/getRefreshedUserAuthAwsCognitoSaga'
import getUserIdDataAwsCognitoSaga from './sagas/getUserIdDataAwsCognitoSaga'
import addCompetencyTagsSaga from './sagas/addCompetencyTagsSaga'
import addProjectsSaga from './sagas/addProjectsSaga'
import addMessagesSaga from './sagas/addMessagesSaga'
import initLoadingSaga from './sagas/initLoadingSaga'

export default function* indexSaga() {
  yield all([fork(templateSaga)])
  yield all([fork(getProfilesSaga)])
  yield all([fork(getRevokedUserAuthAwsCognitoSaga)])
  yield all([fork(getRefreshedUserAuthAwsCognitoSaga)])
  yield all([fork(getUserIdDataAwsCognitoSaga)])
  yield all([fork(addCompetencyTagsSaga)])
  yield all([fork(addProjectsSaga)])
  yield all([fork(addMessagesSaga)])
  yield all([fork(initLoadingSaga)])
}
