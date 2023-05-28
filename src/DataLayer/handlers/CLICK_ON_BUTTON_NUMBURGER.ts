import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_BUTTON_NUMBURGER: ActionEventType = (event, data) => {
  const {
    componentsState: { isUserMenu },
  } = getState()
  dispatch(actionSync.TOGGLE_IS_USER_MENU({ isUserMenu: !isUserMenu }))
}
