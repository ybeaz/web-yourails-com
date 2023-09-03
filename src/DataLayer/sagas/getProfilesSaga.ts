import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getProfilesConnector } from '../../CommunicationLayer/getProfilesConnector'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'
import { profiles as profilesMock } from '../../ContentMock/profilesMock'

export function* getProfiles() {
  let profiles
  try {
    const { client, params } = getProfilesConnector({})

    if (!isLocalDataMockOnlyFlag()) {
      const {
        data: {
          data: { readProfiles },
        },
      } = yield client.post('', params)
      profiles = readProfiles
      if (!readProfiles.length) profiles = profilesMock
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
