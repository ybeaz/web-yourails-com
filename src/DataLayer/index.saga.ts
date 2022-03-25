import { all, fork } from 'redux-saga/effects'

import templateSaga from './sagas/templateSaga'

export default function* indexSaga() {
  yield all([fork(templateSaga)])
}
