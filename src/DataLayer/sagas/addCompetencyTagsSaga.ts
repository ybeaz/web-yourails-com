import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { competencyTags } from '../../ContentMock/competencyTagsMock'

function* addCompetencyTags() {
  try {
    yield put(actionSync.ADD_COMPETENCY_TAGS({ competencyTags }))
  } catch (error: any) {
    console.log('ERROR addCompetencyTagsSaga', { error: error.message })
  }
}

export default function* addCompetencyTagsSaga() {
  yield takeEvery(
    [actionAsync.ADD_COMPETENCY_TAGS_ASYNC.REQUEST().type],
    addCompetencyTags
  )
}
