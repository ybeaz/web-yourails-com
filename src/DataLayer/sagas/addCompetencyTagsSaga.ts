import { takeEvery, put, select } from 'redux-saga/effects'
import { request, gql } from 'graphql-request'

import { RootStoreType } from '../../@types/RootStoreType'
import { rootStoreDefault } from '../rootStoreDefault'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { competencyTags as competencyTagsMock } from '../../ContentMock/competencyTagsMock'
import { getCompetencyTagsConnector } from '../../CommunicationLayer/getCompetencyTagsConnector'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'
import { ClientHttpType } from '../../@types/ClientHttpType'
import { CompetencyTagType } from '../../@types/GraphqlTypes'

const idProfileDict: Record<string, boolean> = {}

function* addCompetencyTags(): Iterable<any> {
  const rootStoreYield: any = yield select(store => store)
  const rootStore: RootStoreType = rootStoreYield || rootStoreDefault
  const {
    globalVars: { idProfileActive: idProfile },
  } = rootStore || rootStoreDefault

  if (typeof idProfile !== 'string' || idProfileDict[idProfile]) return

  idProfileDict[idProfile] = true

  let competencyTags: CompetencyTagType[] = []
  try {
    if (!isLocalDataMockOnlyFlag()) {
      const variables = {
        params: {
          idProfile,
        },
      }
      const { client, clientType, params } = getCompetencyTagsConnector({
        clientType: ClientHttpType['axiosClient'],
        variables,
      })

      if (clientType === ClientHttpType['apolloClient']) {
        const res: any = yield client.query(params)
        competencyTags = res?.data?.readCompetencyTags
      } else if (clientType === ClientHttpType['axiosClient']) {
        const res: any = yield client.post('', params)
        competencyTags = res?.data?.data?.readCompetencyTags
      }

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
