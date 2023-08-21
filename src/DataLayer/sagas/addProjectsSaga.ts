import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { projects } from '../../ContentMock/projectsMock'

function* addProjects() {
  try {
    yield put(actionSync.ADD_PROJECTS({ projects }))
  } catch (error: any) {
    console.log('ERROR addProjectsSaga', { error: error.message })
  }
}

export default function* addProjectsSaga() {
  yield takeEvery([actionAsync.ADD_PROJECTS_ASYNC.REQUEST().type], addProjects)
}
