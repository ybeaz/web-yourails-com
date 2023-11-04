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
  const { createdAt, idProfile: idProfileActive, isPending } = data
  if (!idProfileActive) return

  const {
    profiles,
    globalVars: { idProfileHost },
  } = getState()

  if (isPending === true) {
    const idMessage = uuid()

    const profile = getProfileByIdProfile(profiles, idProfileActive)
    const pendingText = profile.pendingText ? profile.pendingText : ''

    const params = {
      idProfileSender: idProfileActive,
      idProfileReceiver: idProfileHost,
      idMessage,
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
        idProfile: idProfileActive,
      })
    )
  }
}
