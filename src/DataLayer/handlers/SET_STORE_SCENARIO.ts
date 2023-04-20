import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DeviceType } from '../../YrlNativeViewLibrary'
import { getSetStoreScenario } from '../../Shared/getSetStoreScenario'
import { getRedirectedPathnameHash } from '../../Shared/getRedirectedPathnameHash'

const { dispatch, getState } = store

/**
 * @description Handle to setup initial data based on the device type and URL
  xsDevice = DeviceTypeIn['xsDevice'],
  smDevice = DeviceTypeIn['smDevice'],
  mdDevice = DeviceTypeIn['mdDevice'],
  lgDevice = DeviceTypeIn['lgDevice'],
  xlDevice = DeviceTypeIn['xlDevice'],
 */

export const SET_STORE_SCENARIO: ActionEventType = (
  event,
  dataHandle: {
    pathname: string
    hash: string
    deviceType: DeviceType
  }
) => {
  const { pathname, hash, deviceType } = dataHandle

  const {
    componentsState: { isLeftColumn, isMainColumn },
    globalVars: { idUserHost },
    profiles,
  } = getState()

  const {
    caseNo,
    caseDesc,
    isShowApp: isShowAppNext,
    idUser: idUserNext,
    isLeftColumn: isLeftColumnNext,
    isMainColumn: isMainColumnNext,
    isMainColumnBlank: isMainColumnBlankNext,
    modalFrame: modalFrameNext,
    redirectPathname,
    redirectHash,
  } = getSetStoreScenario({
    profiles,
    hostname: window.location.hostname,
    pathname,
    hash,
    deviceType,
    isLeftColumn,
    isMainColumn,
  })

  dispatch(actionSync.TOGGLE_IS_SHOW_GLOBAL(isShowAppNext))
  dispatch(actionSync.TOGGLE_IS_LEFT_COLUMN(isLeftColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN_BLANK(isMainColumnBlankNext))
  dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))

  getRedirectedPathnameHash(redirectPathname, redirectHash)

  if (idUserHost === idUserNext) return
  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser: idUserNext,
    })
  )
}
