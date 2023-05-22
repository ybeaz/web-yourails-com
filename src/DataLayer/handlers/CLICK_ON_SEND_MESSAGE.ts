import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

import { socket } from '../../CommunicationLayer/socketio/socketio'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = (event, data) => {
  const { idProfileActive } = data

  const {
    forms: { inputChat },
  } = getState()

  socket.emit('chatMessage', inputChat[idProfileActive])

  dispatch(actionSync.SET_INPUT_CHAT({ idProfileActive, text: '' }))
}
