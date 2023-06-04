import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { MessageEventType } from '../../@types/MessageEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { handleEvents } from '../index.handleEvents'
import {
  getSortedHashedStringifyArray,
  HashFunctionType,
} from '../../Shared/getSortedHashedStringifyArray'

const { dispatch, getState } = store

export const ON_AWAIT_FROM_ID_PROFILE: ActionEventType = (event, data) => {
  const { idProfile, isAwaiting } = data

  const {
    globalVars: { idProfileHost },
  } = getState()

  if (isAwaiting === true) {
    const idConversation = getSortedHashedStringifyArray([
      idProfileHost,
      idProfile,
    ])

    console.info('ON_AWAIT_FROM_ID_PROFILE [9]', {
      idConversation,
      idProfileHost,
      idProfile,
      isAwaiting,
    })

    const message = {
      idConversation,
      idProfile,
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
