import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ADD_MESSAGES: ActionEventType = (event, data) => {
  dispatch(
    actionSync.ADD_MESSAGES({
      messages: data.messages,
    })
  )
}
