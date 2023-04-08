import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DeviceType } from '../../ViewLayer/Hooks/withDeviceType'

const { dispatch, getState } = store

export const SET_DEVICE_SCREEN: ActionEventType = (
  event,
  deviceType: DeviceType
) => {
  const data = undefined
  dispatch(actionSync.TOGGLE_MAIN_COLUMN(data))
  dispatch(actionSync.TOGGLE_SIDEBAR_RIGHT(data))
}
