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
import { getUserIdDataAwsCognito } from './getUserIdDataAwsCognitoSaga'
import { getRefreshedUserAuthAwsCognito } from './getRefreshedUserAuthAwsCognitoSaga'

type InitLoadingType = {
  type: 'INIT_LOADING_ASYNC_REQUEST'
  data: { query: { s: string | null; code: string | null } }
}

function* initLoading(params: InitLoadingType): Iterable<any> {
  const rootStoreYield: any = yield select(store => store)
  const rootStore: RootStoreType = rootStoreYield || rootStoreDefault
  const { profiles: profilesPrev, sectionsMapping: sectionsMappingPrev } =
    rootStore || rootStoreDefault

  if (profilesPrev.length && sectionsMappingPrev.length) return

  try {
    yield call(getProfiles)

    yield put(actionSync.ADD_SECTIONS_MAPPING({ sectionsMapping }))

    const code = params?.data?.query?.code

    // TODO Implement localStorage for ios and android
    let refresh_token = undefined
    if (Platform.OS === 'web' || Platform.OS === 'windows') {
      refresh_token = localStorage.getItem('refresh_token')
    }

    if (code) {
      yield call(getUserIdDataAwsCognito, { data: { code } })
    } else if (refresh_token) {
      yield call(getRefreshedUserAuthAwsCognito, { data: { refresh_token } })
    }

    const res: any = yield select(store => store)
    const { profiles, globalVars } = res

    const idProfileHost = globalVars?.idProfileHost
    if (idProfileHost) {
      const profileHost: ProfileType = getFilteredObjsArrayBy(
        profiles,
        'idProfile',
        idProfileHost,
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
