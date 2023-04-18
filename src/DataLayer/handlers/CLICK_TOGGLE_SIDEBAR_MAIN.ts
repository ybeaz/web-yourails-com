import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DeviceType } from '../../YrlNativeViewLibrary'

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
    componentsState: { isLeftColumn, isMainColumn, modalFrame },
  } = getState()
  const { isShow } = modalFrame

  let isLeftColumnNext = !isLeftColumn
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
    isLeftColumnNext = false
    isMainColumnNext = true
  }

  dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  dispatch(actionSync.TOGGLE_SIDEBAR_RIGHT(isLeftColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
}
