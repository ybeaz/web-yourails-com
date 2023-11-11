import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'
import { profiles as profilesMock } from '../../ContentMock/profilesMock'
import { ClientHttpType } from '../../@types/ClientHttpType'
import { MethodHttpType } from '../../@types/MethodHttpType'
import { getGraphqlResponseAsync } from '../../CommunicationLayer/getGraphqlResponseAsync'

export function* getProfiles(): Iterable<any> {
  let profiles: any = []
  try {
    if (!isLocalDataMockOnlyFlag()) {
      profiles = yield getGraphqlResponseAsync({
        clientHttpType: ClientHttpType['apolloClient'],
        methodHttpType: MethodHttpType['query'],
        variables: {},
        resolveGraphqlName: 'readProfiles',
      })

      if (!profiles.length) profiles = profilesMock
    } else {
      profiles = profilesMock
    }
  } catch (error: any) {
    console.log('ERROR getProfilesSaga', { error: error.message })
    profiles = profilesMock
  } finally {
    yield put(actionSync.ADD_PROFILES({ profiles }))
  }
}

/**
 * @description Function to getProfilesSaga
 * @import import getProfilesSaga from './sagas/getProfilesSaga'
 */
export default function* getProfilesSaga() {
  yield takeEvery([actionAsync.GET_PROFILES_ASYNC.REQUEST().type], getProfiles)
}
