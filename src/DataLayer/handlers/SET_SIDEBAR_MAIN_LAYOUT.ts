import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DeviceType } from '../../YrlNativeViewLibrary'

const { dispatch, getState } = store

// xsDevice = DeviceTypeIn['xsDevice'],
// smDevice = DeviceTypeIn['smDevice'],
// mdDevice = DeviceTypeIn['mdDevice'],
// lgDevice = DeviceTypeIn['lgDevice'],
// xlDevice = DeviceTypeIn['xlDevice'],

export const SET_SIDEBAR_MAIN_LAYOUT: ActionEventType = (
  event,
  dataHandle: { deviceType: DeviceType }
) => {
  const { deviceType } = dataHandle

  const {
    componentsState: { isSidebarRight, isMainColumn },
  } = getState()

  let isSidebarRightNext = false
  let isMainColumnNext = true
  if (
    deviceType === DeviceType['mdDevice'] ||
    deviceType === DeviceType['lgDevice'] ||
    deviceType === DeviceType['xlDevice']
  ) {
    isSidebarRightNext = true
    isMainColumnNext = true
  } else {
    if (isSidebarRight && isMainColumn) {
      isSidebarRightNext = false
      isMainColumnNext = true
    } else {
      isSidebarRightNext = isSidebarRight
      isMainColumnNext = isMainColumn
    }
  }

  dispatch(actionSync.TOGGLE_SIDEBAR_RIGHT(isSidebarRightNext))
  dispatch(actionSync.TOGGLE_MAIN_COLUMN(isMainColumnNext))
}
