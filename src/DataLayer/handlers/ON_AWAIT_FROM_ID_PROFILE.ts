import { nanoid } from 'nanoid'
import { store } from '../store'
import { ContentType } from '../../@types/ContentType'
import { MessageType } from '../../@types/MessageType'
import { ActionEventType } from '../../@types/ActionEventType'
import { MessageEventType } from '../../@types/MessageEventType'
import { actionSync } from '../../DataLayer/index.action'
import { ON_MESSAGE_SOCKET } from './ON_MESSAGE_SOCKET'
import { getSortedHashedStringifyArray } from '../../Shared/getSortedHashedStringifyArray'
import { getProfileByIdProfile } from '../../Shared/getProfileByIdProfile'

const { dispatch, getState } = store

export const ON_AWAIT_FROM_ID_PROFILE: ActionEventType = (event, data) => {
  const { idProfile, isPending } = data
  if (!idProfile) return

  const {
    profiles,
    globalVars: { idProfileHost },
  } = getState()

  if (isPending === true) {
    const idMessage = nanoid()

    const idConversation = getSortedHashedStringifyArray([
      idProfileHost,
      idProfile,
    ])

    const profile = getProfileByIdProfile(profiles, idProfile)
    const pendingText = profile.pendingText ? profile.pendingText : ''
    const textObj = {
      contentType: ContentType['textArray'],
      textArray: [pendingText],
    }
    const textNext = JSON.stringify(textObj)

    const message: MessageType = {
      idMessage,
      idConversation,
      idProfile,
      isPending,
      eventType: MessageEventType['chatMessage'],
      text: textNext,
    }

    ON_MESSAGE_SOCKET({}, { message })
  } else {
    dispatch(
      actionSync.REMOVE_LAST_MESSAGE_ID_PROFILE({
        idProfile,
      })
    )
  }
}
