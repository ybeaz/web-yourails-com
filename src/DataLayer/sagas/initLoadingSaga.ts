import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { ProfileType } from '../../@types/ProfileType'
import {
  getFilteredObjsArrayBy,
  OperatorType,
} from '../../Shared/getFilteredObjsArrayBy'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnectorAxios } from '../../CommunicationLayer/template.connector'
import { profiles as profilesIn } from '../../ContentMock/profilesMock'
import { sectionsMapping } from '../../ContentMock/sectionsMappingMock'
import {
  socketEmitJoinConversation,
  socketOnConversation,
} from '../../CommunicationLayer/socketio/socketio'
// import { GetRecipeDocument } from '../../types/graphql'
// import { apolloClient } from '../../CommunicationLayer/clients/apolloClient'

socketOnConversation()

function* initLoading(input: any) {
  const { data } = input

  const { profiles: profilesPrev, sectionsMapping: sectionsMappingPrev } =
    yield select(store => store)
  if (profilesPrev.length && sectionsMappingPrev.length) return

  try {
    yield put(actionSync.ADD_PROFILES({ profiles: profilesIn }))
    yield put(actionSync.ADD_SECTIONS_MAPPING({ sectionsMapping }))

    const {
      profiles,
      globalVars: { idProfileHost },
    } = yield select(store => store)

    const profileHost: ProfileType = getFilteredObjsArrayBy(
      profiles,
      'idProfile',
      idProfileHost,
      OperatorType['===']
    )[0] as ProfileType

    if (profileHost.profileName) {
      profiles.forEach((profile: ProfileType) => {
        if (
          profileHost.profileName &&
          profile.profileName &&
          profile.profileName !== '@' &&
          profileHost.profileName !== profile.profileName
        ) {
          console.info('initLoadingSaga [52]', {
            'profile.profileName': profile.profileName,
          })
          socketEmitJoinConversation(
            profileHost.profileName,
            profile.profileName
          )
        }
      })
    }
  } catch (error) {
    const err: any = error
  }
}

export default function* initLoadingSaga() {
  yield takeEvery([actionAsync.INIT_LOADING_ASYNC.REQUEST().type], initLoading)
}
