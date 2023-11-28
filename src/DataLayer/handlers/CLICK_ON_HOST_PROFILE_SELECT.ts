import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { ProfileType } from '../../@types/GraphqlTypes'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'
import { getRedirected } from '../../Shared/getRedirected'
import { getSocketEmitJoinConversation } from '../../CommunicationLayer/socketio/getSocketEmitJoinConversation'

const { dispatch, getState } = store

export const CLICK_ON_HOST_PROFILE_SELECT: ActionEventType = (event, data) => {
  const {
    profileHostID,
    profileNameHost,
    urlParam1,
    urlParam2,
    query,
    platformOS,
  } = data
  const {
    profiles,
    globalVars: { userHostID, profileActiveID },
  } = getState()

  const isProfileActiveOfUserHost = !!profiles.find(
    (profile: ProfileType) =>
      profile.userID === userHostID && profile.profileID === profileActiveID
  )

  dispatch(actionSync.SET_ID_PROFILE_HOST(data))

  if (isProfileActiveOfUserHost) {
    dispatch(
      actionSync.SET_ID_PROFILE_ACTIVE({ profileActiveID: profileHostID })
    )

    getSocketEmitJoinConversation(profileHostID, profileHostID)

    const getPathNameForReplaceProps = {
      urlParam1,
      urlParam2,
      profileName: profileNameHost,
      query,
    }

    const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

    getRedirected(pathnameNext, { platformOS, replace: true })
  }

  dispatch(
    actionSync.TOGGLE_PROFILE_SELECT_MENU({
      isProfileSelectMenu: false,
    })
  )
}
