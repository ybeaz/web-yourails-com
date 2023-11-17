import { all, fork } from 'redux-saga/effects'

import getProfilesSaga from './sagas/getProfilesSaga'
import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
import addCompetencyTagsSaga from './sagas/addCompetencyTagsSaga'
import addProjectsSaga from './sagas/addProjectsSaga'
import addMessagesSaga from './sagas/addMessagesSaga'
import initLoadingSaga from './sagas/initLoadingSaga'

export default function* indexSaga() {
  yield all([fork(getProfilesSaga)])
  yield all([fork(getAuthAwsCognitoUserRevokedSaga)])
  yield all([fork(getAuthAwsCognitoUserRefreshedSaga)])
  yield all([fork(getAuthAwsCognitoUserDataSaga)])
  yield all([fork(addCompetencyTagsSaga)])
  yield all([fork(addProjectsSaga)])
  yield all([fork(addMessagesSaga)])
  yield all([fork(initLoadingSaga)])
}
