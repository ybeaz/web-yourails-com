import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { MessageType } from '../../@types/MessageType'
import { MessageEventType } from '../../@types/MessageEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ON_MESSAGE_SOCKET: ActionEventType = (event, data) => {
  const {
    messages,
    globalVars: { idProfileHost, idProfileActive },
  } = getState()
  const {
    message: { idConversation, eventType },
  } = data

  const idsFromConversation = JSON.parse(idConversation)

  if (
    !idsFromConversation.includes(idProfileHost) ||
    !idsFromConversation.includes(idProfileActive)
  )
    return

  const messsagesJoinConversation = messages.filter(
    (message: MessageType) =>
      message.idConversation === idConversation &&
      message.eventType === MessageEventType['joinConversation']
  )

  const messsagesDisconnectConversation = messages.filter(
    (message: MessageType) =>
      message.idConversation === idConversation &&
      message.eventType === MessageEventType['disconnectConversation']
  )

  if (eventType === MessageEventType['joinConversation']) {
    if (
      messsagesJoinConversation.length === 0 ||
      messsagesJoinConversation.length -
        messsagesDisconnectConversation.length ===
        0
    )
      dispatch(actionSync.ON_MESSAGE_SOCKET(data))
  } else {
    dispatch(actionSync.ON_MESSAGE_SOCKET(data))
  }
}

/*

    const idsFromConversation = JSON.parse(message.idConversation)

    if (
      idsFromConversation.includes(idProfileHost) &&
      idsFromConversation.includes(idProfileActive)
    ) {
      handleEvents.ON_MESSAGE_SOCKET({}, { message })
      console.log('getSocketOnMessage [15]', {
        idProfileHost,
        idProfileActive,
        idsFromConversation,
        message,
      })
    }

*/
