import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ADD_PROJECTS: ActionEventType = (event, data) => {
  dispatch(actionAsync.ADD_PROJECTS_ASYNC.REQUEST({}))
}
