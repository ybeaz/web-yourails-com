import { router } from '../../RouterScreensConfig'
import { store } from '../store'
import { SectionMappingType } from '../../@types/SectionMappingType'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { DeviceType } from '../../YrlNativeViewLibrary'
import { getSetStoreScenario } from '../../Shared/getSetStoreScenario'

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
export const SET_STORE_SCENARIO: ActionEventType = (
  event,
  dataHandle: {
    urlParam1: string
    urlParam2: string
    urlParam3: string
    query: { s: string }
    deviceType: DeviceType
    sectionsMappingForProfile: SectionMappingType[]
  }
) => {
  const {
    urlParam1,
    urlParam2,
    urlParam3,
    query,
    deviceType,
    sectionsMappingForProfile,
  } = dataHandle

  const {
    globalVars: { idUserHost },
    profiles,
  } = getState()

  const {
    caseNo,
    caseDesc,
    caseConditions,
    isShowApp: isShowAppNext,
    idUser: idUserNext,
    isLeftColumn: isLeftColumnNext,
    isMainColumn: isMainColumnNext,
    isMainColumnBlank: isMainColumnBlankNext,
    modalFrame: modalFrameNext,
    redirectPathname,
  } = getSetStoreScenario({
    profiles,
    hostname: window.location.hostname,
    urlParam1,
    urlParam2,
    urlParam3,
    query,
    deviceType,
    sectionsMappingForProfile,
  })

  dispatch(actionSync.TOGGLE_IS_SHOW_GLOBAL(isShowAppNext))
  dispatch(actionSync.TOGGLE_IS_LEFT_COLUMN(isLeftColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN_BLANK(isMainColumnBlankNext))
  dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))

  if (redirectPathname) router.navigate(redirectPathname, { replace: true })

  console.info('SET_STORE_SCENARIO [78]', {
    urlParam1,
    urlParam2,
    urlParam3,
    query,
    deviceType,
  })

  console.info('SET_STORE_SCENARIO [80]', {
    caseNo,
    caseDesc,
    caseConditions,
    isShowApp: isShowAppNext,
    idUser: idUserNext,
    isLeftColumn: isLeftColumnNext,
    isMainColumn: isMainColumnNext,
    isMainColumnBlank: isMainColumnBlankNext,
    modalFrame: modalFrameNext,
    redirectPathname,
  })

  if (idUserHost === idUserNext) return
  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser: idUserNext,
    })
  )
}
