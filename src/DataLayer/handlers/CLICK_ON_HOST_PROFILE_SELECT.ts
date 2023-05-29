import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_HOST_PROFILE_SELECT: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_HOST_PROFILE(data))
  dispatch(
    actionSync.TOGGLE_PROFILE_SELECT_MENU({
      isProfileSelectMenu: false,
    })
  )
}
