import { store } from '../store'

import { ActionEventType } from '../../@types/ActionEventType'
import { MessageEventType } from '../../@types/MessageEventType'

import { actionSync } from '../../DataLayer/index.action'
import { getSortedArray } from '../../Shared/getSortedArray'
import { getSocketEmitMessage } from '../../CommunicationLayer/socketio/getSocketEmitMessage'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = ({}, data) => {
  const {
    profileActive: {
      idProfile: idProfileActive,
      isAsyncAwait: isAsyncAwaitActive,
    },
  } = data

  const {
    forms: { inputChat },
    globalVars: { idProfileHost },
  } = getState()

  const idConversation = JSON.stringify(
    getSortedArray([idProfileHost, idProfileActive])
  )

  const message = {
    idConversation,
    idProfile: idProfileHost,
    text: inputChat[idProfileActive],
    eventType: MessageEventType['chatMessage'],
    isAsyncAwait: isAsyncAwaitActive,
  }

  getSocketEmitMessage(message)

  dispatch(actionSync.SET_INPUT_CHAT({ idProfileActive, text: '' }))
}
