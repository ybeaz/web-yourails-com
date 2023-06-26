import { store } from '../store'

import { ContentType } from '../../@types/ContentType'
import { ActionEventType } from '../../@types/ActionEventType'
import { MessageEventType } from '../../@types/MessageEventType'

import { actionSync } from '../../DataLayer/index.action'
import { getSortedArray } from '../../Shared/getSortedArray'
import { getSocketEmitMessage } from '../../CommunicationLayer/socketio/getSocketEmitMessage'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = ({}, data) => {
  const {
    profileActive: { idProfile: idProfileActive },
  } = data

  const {
    forms: { inputChat },
    globalVars: { idProfileHost },
  } = getState()

  const idConversation = JSON.stringify(
    getSortedArray([idProfileHost, idProfileActive])
  )

  const textObj = {
    contentType: ContentType['textArray'],
    textArray: [inputChat[idProfileActive]],
  }
  const textNext = JSON.stringify(textObj)

  const message = {
    idConversation,
    idProfile: idProfileHost,
    text: textNext,
    eventType: MessageEventType['chatMessage'],
  }

  getSocketEmitMessage(message)

  dispatch(actionSync.SET_INPUT_CHAT({ idProfileActive, text: '' }))
}
