import { takeEvery, put } from 'redux-saga/effects'

import { Platform } from 'react-native'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { isLocalDataMockOnlyFlag } from '../../FeatureFlags'
import { profiles as profilesMock } from '../../ContentMock/profilesMock'
import {
  getResponseGraphqlAsync,
  GetResponseGraphqlAsyncOptionsType,
} from '../../../../yourails_communication_layer'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { ClientAppType } from '../../@types/ClientAppType'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'

export function* getProfiles(): Iterable<any> {
  // TODO Implement localStorage for ios and android
  let refresh_token = null
  if (Platform.OS === 'web') {
    refresh_token = localStorage.getItem('refresh_token')
  }

  let profiles: any = []
  try {
    if (refresh_token && !isLocalDataMockOnlyFlag()) {
      const options: GetResponseGraphqlAsyncOptionsType = {
        refresh_token,
        redirect_uri: CLIENTS_URI[getDetectedEnv()],
        client_app: ClientAppType['CHAT_AI'],
      }
      profiles = yield getResponseGraphqlAsync(
        {
          variables: {},
          resolveGraphqlName: 'readProfilesAll',
        },
        options
      )

      if (!profiles?.length) profiles = profilesMock
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
