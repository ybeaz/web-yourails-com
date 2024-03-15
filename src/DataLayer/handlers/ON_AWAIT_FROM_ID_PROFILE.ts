import { v4 as uuid } from 'uuid'
import { store } from '../store'
import { MessageType } from '../../@types/MessageType'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { ON_MESSAGE_SOCKET } from './ON_MESSAGE_SOCKET'
import { getProfileByIdProfile } from '../../Shared/getProfileByIdProfile'
import { getCreatedMessage } from '../../Shared/getCreatedMessage'

const { dispatch, getState } = store

export const ON_AWAIT_FROM_ID_PROFILE: ActionEventType = (_, data) => {
  const { createdAt, profileID: profileActiveID, isPending } = data
  if (!profileActiveID) return

  const {
    profiles,
    globalVars: { profileHostID },
  } = getState()

  if (isPending === true) {
    const messageID = uuid()

    const profile = getProfileByIdProfile(profiles, profileActiveID)
    const pendingText = profile.pendingText ? profile.pendingText : ''

    const params = {
      profileSenderID: profileActiveID,
      profileReceiverID: profileHostID,
      messageID,
      text: pendingText,
      createdAt,
      isPending,
    }
    const options = {
      addMs: 0,
      isIdMessage: false,
      isCreatedAt: false,
      printRes: false,
    }
    const message: MessageType = getCreatedMessage(params, options)

    ON_MESSAGE_SOCKET({}, { message })
  } else {
    dispatch(
      actionSync.REMOVE_LAST_MESSAGE_ID_PROFILE({
        profileID: profileActiveID,
      })
    )
  }
}
