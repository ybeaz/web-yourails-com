import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'
import { getRedirected } from '../../Shared/getRedirected'
import { ProfileType } from '../../@types/ProfileType'
import {
  getFilteredObjsArrayBy,
  OperatorType,
} from '../../Shared/getFilteredObjsArrayBy'
import {
  socketOnConversation,
  socketEmitJoinConversation,
} from '../../CommunicationLayer/socketio/socketio'

const { dispatch, getState } = store
// socketOnConversation()

export const CLICK_ON_USER_CHAT_CARD: ActionEventType = (event, data) => {
  const { idProfile, profileName, urlParam1, urlParam2, query } = data

  const {
    profiles,
    globalVars: { idProfileHost },
  } = getState()

  const profileHost: ProfileType = getFilteredObjsArrayBy(
    profiles,
    'idProfile',
    idProfileHost,
    OperatorType['===']
  )[0] as ProfileType

  profileHost?.profileName &&
    socketEmitJoinConversation(profileHost.profileName, profileName)

  console.info('CLICK_ON_USER_CHAT_CARD [26]', {
    profileNameHost: profileHost?.profileName,
    profileName,
  })

  dispatch(
    actionSync.SET_ID_PROFILE_ACTIVE({
      idProfileActive: idProfile,
    })
  )

  const getPathNameForReplaceProps = {
    urlParam1,
    urlParam2,
    profileName,
    query,
  }

  const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

  getRedirected(pathnameNext, { replace: true })
}
