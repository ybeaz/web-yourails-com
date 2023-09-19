import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { HOST_NAME } from '../../Constants/hostname.const'
import { isHostR1UserToComFlag } from '../../FeatureFlags'

const { dispatch, getState } = store

/**
   * @description Handle to setup initial data based on the device type and URL
    xsDevice = DeviceTypeIn['xsDevice'],
    smDevice = DeviceTypeIn['smDevice'],
    mdDevice = DeviceTypeIn['mdDevice'],
    lgDevice = DeviceTypeIn['lgDevice'],
    xlDevice = DeviceTypeIn['xlDevice'],
   */

/**
 * @description This handle is called when the app loads initially
 */
export const SET_STORE_SCENARIO_MOBILE: ActionEventType = (event, data) => {
  const { navigation } = data
  const {
    globalVars: { idUserHost, idProfile },
  } = getState()

  let hostname = HOST_NAME
  if (isHostR1UserToComFlag()) hostname = 'r1.userto.com'

  const {
    caseNo,
    caseDesc,
    caseConditions,
    isShowApp: isShowAppNext,
    idUserHost: idUserHostNext,
    idUser: idUserNext,
    idProfile: idProfileNext,
    isLeftColumn: isLeftColumnNext,
    isMainColumn: isMainColumnNext,
    isMainColumnBlank: isMainColumnBlankNext,
    modalFrame: modalFrameNext,
  } = {
    caseNo: '01 mobile',
    caseDesc: 'mobile device',
    caseConditions: 'N/A',
    isShowApp: true,
    idUserHost,
    idUser: undefined,
    idProfile: undefined,
    isLeftColumn: true,
    isMainColumn: false,
    isMainColumnBlank: true,
    modalFrame: false,
  }

  dispatch(actionSync.ADD_NAVIGATION_MOBILE({ navigation }))
  dispatch(actionSync.SET_ID_USER_HOST({ idUserHost: idUserHostNext }))
  dispatch(actionSync.SET_ID_PROFILE_ACTIVE({ idProfileActive: idProfileNext }))
  dispatch(actionSync.TOGGLE_IS_SHOW_GLOBAL(isShowAppNext))
  dispatch(actionSync.TOGGLE_IS_LEFT_COLUMN(isLeftColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN_BLANK(isMainColumnBlankNext))
  dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))

  if (idProfile === idProfileNext) return

  dispatch(
    actionSync.SET_ID_PROFILE_ACTIVE({
      idProfileActive: idProfileNext,
    })
  )
}
