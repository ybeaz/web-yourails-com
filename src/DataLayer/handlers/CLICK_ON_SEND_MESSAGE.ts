import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSortedArray } from '../../Shared/getSortedArray'
import { getSocketEmitMessage } from '../../CommunicationLayer/socketio/getSocketEmitMessage'

import { socket } from '../../CommunicationLayer/socketio/socketio'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = (event, data) => {
  const { idProfileActive } = data

  const {
    profiles,
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
  }

  getSocketEmitMessage(message)

  dispatch(actionSync.SET_INPUT_CHAT({ idProfileActive, text: '' }))
}
