import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DeviceType } from '../../ViewLayer/Hooks/withDeviceType'

const { dispatch, getState } = store

export const CLICK_TOGGLE_SIDEBAR_MAIN: ActionEventType = (
  event,
  dataHandle: { deviceType: DeviceType }
) => {
  const { deviceType } = dataHandle

  if (
    deviceType === DeviceType['mdDevice'] ||
    deviceType === DeviceType['lgDevice'] ||
    deviceType === DeviceType['xlDevice']
  )
    return

  const {
    componentsState: { isSidebarRight, isMainColumn },
  } = getState()

  let isSidebarRightNext = !isSidebarRight
  let isMainColumnNext = !isMainColumn

  dispatch(actionSync.TOGGLE_SIDEBAR_RIGHT(isSidebarRightNext))
  dispatch(actionSync.TOGGLE_MAIN_COLUMN(isMainColumnNext))
}
