import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getProfilesConnector } from '../../CommunicationLayer/getProfilesConnector'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'
import { profiles as profilesMock } from '../../ContentMock/profilesMock'

export function* getProfiles() {
  let profiles
  try {
    /**
     * @description Code snippet to use axios as a connector client
     * @example: */
    const { client, params } = getProfilesConnector({})

    if (!isLocalDataMockOnlyFlag()) {
      const {
        data: {
          data: { getProfiles },
        },
      } = yield client.post('', params)
      profiles = getProfiles
    } else {
      profiles = profilesMock
    }

    // yield put(actionSync.ADD_PROFILES({ profiles }))
  } catch (error) {
    const err: any = error
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
