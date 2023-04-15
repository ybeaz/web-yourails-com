import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ADD_PROFILES: ActionEventType = (event, data) => {
  dispatch(
    actionSync.ADD_PROFILES({
      profiles: data.profiles,
    })
  )
}
