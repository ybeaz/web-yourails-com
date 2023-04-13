import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_USER_CHAT_CARD: ActionEventType = (event, data) => {
  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUserHost: data.idUserHost,
    })
  )
}
