import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_ON_HOST_PROFILE_SELECT: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_ID_PROFILE_HOST(data))
  dispatch(
    actionSync.TOGGLE_PROFILE_SELECT_MENU({
      isProfileSelectMenu: false,
    })
  )
}
