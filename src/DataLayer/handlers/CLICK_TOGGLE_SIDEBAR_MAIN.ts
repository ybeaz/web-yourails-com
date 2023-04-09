import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DeviceType } from '../../ViewLayer/Hooks/withDeviceType'
import { SET_MODAL_FRAME } from './SET_MODAL_FRAME'

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
    componentsState: { isSidebarRight, isMainColumn, modalFrame },
  } = getState()
  const { isShow } = modalFrame

  let isSidebarRightNext = !isSidebarRight
  let isMainColumnNext = !isMainColumn

  const modalFrameNext = {
    childName: null,
    isShow: false,
    childProps: {},
  }

  if (
    isShow &&
    (deviceType === DeviceType['xsDevice'] ||
      deviceType === DeviceType['smDevice'])
  ) {
    isSidebarRightNext = false
    isMainColumnNext = true
  }

  dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  dispatch(actionSync.TOGGLE_SIDEBAR_RIGHT(isSidebarRightNext))
  dispatch(actionSync.TOGGLE_MAIN_COLUMN(isMainColumnNext))
}
