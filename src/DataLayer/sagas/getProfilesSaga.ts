import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getProfilesConnector } from '../../CommunicationLayer/getProfilesConnector'

function* getProfiles() {
  try {
    /**
     * @description Code snippet to use axios as a connector client
     * @example: */
    const { client, params } = getProfilesConnector({})
    const {
      data: {
        data: { getProfiles: profiles },
      },
    } = yield client.post('', params)

    yield put(actionSync.ADD_PROFILES({ profiles }))

    return profiles
  } catch (error) {
    const err: any = error
  }
}

/**
 * @description Function to getProfilesSaga
 * @import import getProfilesSaga from './sagas/getProfilesSaga'
 */
export default function* getProfilesSaga() {
  yield takeEvery([actionAsync.GET_PROFILES_ASYNC.REQUEST().type], getProfiles)
}
