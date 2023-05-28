import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_PROFILE_SELECT: ActionEventType = (event, data) => {
  const {
    componentsState: { isUserMenu, isProfileSelectMenu },
  } = getState()

  dispatch(actionSync.TOGGLE_IS_USER_MENU({ isUserMenu: !isUserMenu }))

  dispatch(
    actionSync.TOGGLE_PROFILE_SELECT_MENU({
      isProfileSelectMenu: !isProfileSelectMenu,
    })
  )
}
