import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { competencyTags as competencyTagsMock } from '../../ContentMock/competencyTagsMock'
import { getCompetencyTagsConnector } from '../../CommunicationLayer/getCompetencyTagsConnector'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'

function* addCompetencyTags() {
  let competencyTags
  try {
    if (!isLocalDataMockOnlyFlag()) {
      // TODO: Now these variables does not work and are used as examples
      const variables = {
        options: {
          first: 0,
          last: 1000000,
        },
      }
      const { client, params } = getCompetencyTagsConnector(variables)

      const {
        data: {
          data: { readCompetencyTags },
        },
      } = yield client.post('', params)
      competencyTags = readCompetencyTags
      if (!readCompetencyTags.length) competencyTags = competencyTagsMock
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
