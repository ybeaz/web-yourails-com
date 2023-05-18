import { all, fork } from 'redux-saga/effects'

import templateSaga from './sagas/templateSaga'
import initLoadingSaga from './sagas/initLoadingSaga'

export default function* indexSaga() {
  yield all([fork(templateSaga)])
  yield all([fork(initLoadingSaga)])
}
