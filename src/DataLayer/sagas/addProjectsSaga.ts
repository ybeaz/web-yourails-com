import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnectorAxios } from '../../CommunicationLayer/template.connector'
import { GetRecipeDocument } from '../../types/graphql'
import { apolloClient } from '../../CommunicationLayer/clients/apolloClient'
import { projects } from '../../ContentMock/projectsMock'

function* addProjects(input: any) {
  const { data: variables } = input

  try {
    yield put(actionSync.ADD_PROJECTS({ projects }))
  } catch (error) {
    const err: any = error
  }
}

export default function* addProjectsSaga() {
  yield takeEvery([actionAsync.ADD_PROJECTS_ASYNC.REQUEST().type], addProjects)
}
