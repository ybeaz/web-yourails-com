import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ADD_COMPETENCY_TAGS: ActionEventType = (event, data) => {
  dispatch(actionAsync.ADD_COMPETENCY_TAGS_ASYNC.REQUEST({}))
}
