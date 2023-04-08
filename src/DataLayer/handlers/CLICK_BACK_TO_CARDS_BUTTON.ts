import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_BACK_TO_CARDS_BUTTON: ActionEventType = (event, {}) => {
  const data = undefined
  dispatch(actionSync.TOGGLE_MAIN_COLUMN(data))
  dispatch(actionSync.TOGGLE_SIDEBAR_RIGHT(data))
}
