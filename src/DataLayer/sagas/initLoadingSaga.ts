import { call, takeEvery, put, select } from 'redux-saga/effects'
import { Platform } from 'react-native'
import { RootStoreType } from '../../@types/RootStoreType'
import { rootStoreDefault } from '../rootStoreDefault'
import { ProfileType } from '../../@types/GraphqlTypes'
import {
  getFilteredObjsArrayBy,
  OperatorType,
} from '../../Shared/getFilteredObjsArrayBy'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { sectionsMapping } from '../../ContentMock/sectionsMappingMock'
import { getSocketEmitJoinConversation } from '../../CommunicationLayer/socketio/getSocketEmitJoinConversation'
import { getJoinedConversation } from '../../CommunicationLayer/socketio/getJoinedConversation'
import { getProfiles } from './getProfilesSaga'
import { getAuthAwsCognitoUserData } from './getAuthAwsCognitoUserDataSaga'
import { getAuthAwsCognitoUserRefreshed } from './getAuthAwsCognitoUserRefreshedSaga'

type InitLoadingType = {
  type: 'INIT_LOADING_ASYNC_REQUEST'
  data: { query: { s: string | null; code: string | null } }
}

function* initLoading(params: InitLoadingType): Iterable<any> {
  try {
    // TODO Implement localStorage for ios and android
    let refresh_token = null
    if (Platform.OS === 'web') {
      refresh_token = localStorage.getItem('refresh_token')
    }

    yield call(getProfiles)

    const code = params?.data?.query?.code

    if (code) {
      yield call(getAuthAwsCognitoUserData, { data: { code } })
    } else if (refresh_token) {
      yield call(getAuthAwsCognitoUserRefreshed)
    }

    yield put(actionSync.ADD_SECTIONS_MAPPING({ sectionsMapping }))

    let storeState: any = yield select((store: RootStoreType) => store)

    if (storeState.profiles.length < 10) {
      yield call(getProfiles)
      storeState = yield select(store => store)
    }

    const { profiles } = storeState
    const profileHostID = storeState?.globalVars?.profileHostID

    if (profileHostID) {
      const profileHost: ProfileType = getFilteredObjsArrayBy(
        profiles,
        'profileID',
        profileHostID,
        OperatorType['===']
      )[0] as ProfileType

      const getJoinedConversationProps = {
        profilesIn: profiles,
        profileHostIn: profileHost,
        getSocketEmitJoinConversationIn: getSocketEmitJoinConversation,
      }
      yield call(getJoinedConversation, getJoinedConversationProps)
    }
  } catch (error: any) {
    console.log('ERROR initLoadingSaga', { error: error.message })
  }
}

export default function* initLoadingSaga() {
  yield takeEvery([actionAsync.INIT_LOADING_ASYNC.REQUEST().type], initLoading)
}
