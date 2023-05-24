import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getProfileNameByIdProfile } from '../../Shared/getProfileNameByIdProfile'
import { getSortedArray } from '../../Shared/getSortedArray'

import { socket } from '../../CommunicationLayer/socketio/socketio'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = (event, data) => {
  const { idProfileActive } = data

  const {
    profiles,
    forms: { inputChat },
    globalVars: { idProfileHost },
  } = getState()

  const profileHost = getProfileNameByIdProfile(profiles, idProfileHost)
  const profleActive = getProfileNameByIdProfile(profiles, idProfileActive)

  const idConversation = JSON.stringify(
    getSortedArray([profileHost, profleActive])
  )

  const message = {
    idConversation,
    idProfile: idProfileHost,
    text: inputChat[idProfileActive],
  }

  socket.emit('chatMessage', message)

  dispatch(actionSync.SET_INPUT_CHAT({ idProfileActive, text: '' }))
}
