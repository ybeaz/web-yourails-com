import { nanoid } from 'nanoid'
import { store } from '../store'
import { MessageType } from '../../@types/MessageType'
import { ActionEventType } from '../../@types/ActionEventType'
import { MessageEventType } from '../../@types/MessageEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { handleEvents } from '../index.handleEvents'
import { getSortedHashedStringifyArray } from '../../Shared/getSortedHashedStringifyArray'

const { dispatch, getState } = store

export const ON_AWAIT_FROM_ID_PROFILE: ActionEventType = (event, data) => {
  const { idProfile, isPending } = data

  const {
    globalVars: { idProfileHost },
  } = getState()

  if (isPending === true) {
    const idMessage = nanoid()

    const idConversation = getSortedHashedStringifyArray([
      idProfileHost,
      idProfile,
    ])

    const message: MessageType = {
      idMessage,
      idConversation,
      idProfile,
      isPending,
      eventType: MessageEventType['chatMessage'],
      text: 'I am thinking',
    }

    handleEvents.ON_MESSAGE_SOCKET({}, { message })
  } else {
    dispatch(
      actionSync.REMOVE_LAST_MESSAGE_ID_PROFILE({
        idProfile,
      })
    )
  }
}
