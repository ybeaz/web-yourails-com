import { takeEvery, put, select } from 'redux-saga/effects'

import { RootStoreType } from '../../@types/RootStoreType'
import { rootStoreDefault } from '../rootStoreDefault'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { competencyTags as competencyTagsMock } from '../../ContentMock/competencyTagsMock'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'
import { ClientHttpType } from '../../@types/ClientHttpType'
import { MethodHttpType } from '../../@types/MethodHttpType'
import { getGraphqlResponseAsync } from '../../CommunicationLayer/getGraphqlResponseAsync'

const idProfileDict: Record<string, boolean> = {}

function* addCompetencyTags(): Iterable<any> {
  const rootStoreYield: any = yield select(store => store)
  const rootStore: RootStoreType = rootStoreYield || rootStoreDefault
  const {
    globalVars: { idProfileActive: idProfile },
  } = rootStore || rootStoreDefault

  if (typeof idProfile !== 'string' || idProfileDict[idProfile]) return

  idProfileDict[idProfile] = true

  let competencyTags: any = []
  try {
    if (!isLocalDataMockOnlyFlag()) {
      const variables = {
        params: {
          idProfile,
        },
      }

      competencyTags = yield getGraphqlResponseAsync({
        clientHttpType: ClientHttpType['apolloClient'],
        methodHttpType: MethodHttpType['query'],
        variables,
        resolveGraphqlName: 'readCompetencyTags',
      })

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
