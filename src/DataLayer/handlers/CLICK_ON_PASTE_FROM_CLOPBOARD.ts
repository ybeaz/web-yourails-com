import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_ON_PASTE_FROM_CLOPBOARD: ActionEventType = (_, data) =>
  dispatch(actionSync.SET_INPUT_CHAT(data))
