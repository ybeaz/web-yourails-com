import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ADD_MESSAGES: ActionEventType = (event, data) => {
  /** @todo Add a specific conversation */
  dispatch(actionAsync.ADD_MESSAGES_ASYNC.REQUEST({}))
}
