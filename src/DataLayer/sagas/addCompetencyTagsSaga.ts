import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { competencyTags as competencyTagsMock } from '../../ContentMock/competencyTagsMock'
import { getCompetencyTagsConnector } from '../../CommunicationLayer/getCompetencyTagsConnector'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'

function* addCompetencyTags(params: any): Iterable<any> {
  const idProfile = params?.data?.idProfile
  let competencyTags = []
  try {
    if (!isLocalDataMockOnlyFlag()) {
      const variables = {
        params: {
          idProfile,
        },
      }
      const { client, params } = getCompetencyTagsConnector(variables)
      const res: any = yield client.post('', params)
      competencyTags = res?.data?.data?.readCompetencyTags
      if (!competencyTags?.length) competencyTags = competencyTagsMock
    } else {
      competencyTags = competencyTagsMock
    }
  } catch (error: any) {
    console.log('ERROR addCompetencyTags', { error: error.message })
    competencyTags = competencyTagsMock
  } finally {
    yield put(actionSync.ADD_COMPETENCY_TAGS({ competencyTags }))
  }
}

export default function* addCompetencyTagsSaga() {
  yield takeEvery(
    [actionAsync.ADD_COMPETENCY_TAGS_ASYNC.REQUEST().type],
    addCompetencyTags
  )
}
