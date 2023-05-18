import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnectorAxios } from '../../CommunicationLayer/template.connector'
import { profiles } from '../../ContentMock/profilesMock'
import { sectionsMapping } from '../../ContentMock/sectionsMappingMock'
// import { GetRecipeDocument } from '../../types/graphql'
// import { apolloClient } from '../../CommunicationLayer/clients/apolloClient'

function* initLoading(input: any) {
  const { data } = input

  try {
    yield put(actionSync.ADD_PROFILES({ profiles }))
    yield put(actionSync.ADD_SECTIONS_MAPPING({ sectionsMapping }))
  } catch (error) {
    const err: any = error
  }
}

export default function* initLoadingSaga() {
  yield takeEvery([actionAsync.INIT_LOADING_ASYNC.REQUEST().type], initLoading)
}
