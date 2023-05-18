import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const INIT_LOADING: ActionEventType = (event, data) => {
  dispatch(actionAsync.INIT_LOADING_ASYNC.REQUEST({}))
}
