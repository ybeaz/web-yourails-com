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

/**
 * @status LEGACY, REMOVE AFTER 2023-06-01
 */
export const SET_SIDEBAR_MAIN_LAYOUT: ActionEventType = (
  event,
  dataHandle: { pathname: string; deviceType: DeviceType }
) => {
  const { pathname, deviceType } = dataHandle

  const {
    componentsState: { isLeftColumn, isMainColumn },
  } = getState()

  let isLeftColumnNext = false
  let isMainColumnNext = true

  if (pathname === '/') {
    isLeftColumnNext = false
  } else if (
    deviceType === DeviceType['mdDevice'] ||
    deviceType === DeviceType['lgDevice'] ||
    deviceType === DeviceType['xlDevice']
  ) {
    isLeftColumnNext = true
    isMainColumnNext = true
  } else {
    if (isLeftColumn && isMainColumn) {
      isLeftColumnNext = false
      isMainColumnNext = true
    } else {
      isLeftColumnNext = isLeftColumn
      isMainColumnNext = isMainColumn
    }
  }

  dispatch(actionSync.TOGGLE_LEFT_COLUMN(isLeftColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
}
