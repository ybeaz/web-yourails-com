import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { ProfileType } from '../../@types/ProfileType'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'
import { getRedirected } from '../../Shared/getRedirected'
import { getSocketEmitJoinConversation } from '../../CommunicationLayer/socketio/getSocketEmitJoinConversation'

const { dispatch, getState } = store

// const getIsProfileUserHost = ()

export const CLICK_ON_HOST_PROFILE_SELECT: ActionEventType = (event, data) => {
  const { idProfileHost, profileNameHost, urlParam1, urlParam2, query } = data
  const {
    profiles,
    globalVars: { idUserHost, idProfileActive },
  } = getState()

  const isProfileActiveOfUserHost = !!profiles.find(
    (profile: ProfileType) =>
      profile.idUser === idUserHost && profile.idProfile === idProfileActive
  )

  dispatch(actionSync.SET_ID_PROFILE_HOST(data))

  if (isProfileActiveOfUserHost) {
    dispatch(
      actionSync.SET_ID_PROFILE_ACTIVE({ idProfileActive: idProfileHost })
    )

    getSocketEmitJoinConversation(idProfileHost, idProfileHost)

    const getPathNameForReplaceProps = {
      urlParam1,
      urlParam2,
      profileName: profileNameHost,
      query,
    }

    const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

    getRedirected(pathnameNext, { replace: true })
  }

  dispatch(
    actionSync.TOGGLE_PROFILE_SELECT_MENU({
      isProfileSelectMenu: false,
    })
  )
}
