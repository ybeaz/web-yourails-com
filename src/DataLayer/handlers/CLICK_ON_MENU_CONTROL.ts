import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_MENU_CONTROL: ActionEventType = (event, data) => {
  const { isProfileSelectMenu, isUserMenu } = data
  dispatch(actionSync.TOGGLE_IS_USER_MENU({ isUserMenu }))
  dispatch(
    actionSync.TOGGLE_PROFILE_SELECT_MENU({
      isProfileSelectMenu,
    })
  )
}
