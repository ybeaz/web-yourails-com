import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const TOGGLE_PROFILE_SELECT_MENU: ActionEventType = (event, data) => {
  const {
    componentsState: { isProfileSelectMenu },
  } = getState()

  dispatch(
    actionSync.TOGGLE_PROFILE_SELECT_MENU({
      isProfileSelectMenu: !isProfileSelectMenu,
    })
  )
}
