import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_HOST_PROFILE_SELECT: ActionEventType = (event, data) =>
  dispatch(actionSync.SELECT_HOST_PROFILE(data))
