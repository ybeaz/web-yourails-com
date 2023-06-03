import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ON_SET_MODAL_AWAIT_VIEW: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_MODAL_FRAME(data))
}
