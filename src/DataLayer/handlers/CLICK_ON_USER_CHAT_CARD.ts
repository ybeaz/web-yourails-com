import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_USER_CHAT_CARD: ActionEventType = (event, data) => {
  const { idUser, profilename } = data

  const {
    globalVars: { idUserHost },
  } = getState()

  console.info('CLICK_ON_USER_CHAT_CARD [10]', {
    idUserHost,
    'window.location.hash': window.location.hash,
  })

  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser,
    })
  )

  window.location.hash = profilename
}
