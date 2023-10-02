import { store } from '../store'
import { SectionMappingType } from '../../@types/SectionMappingType'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { DeviceType, PlatformOSYrlType } from '../../YrlNativeViewLibrary'
import { getSetStoreScenario } from '../../Shared/getSetStoreScenario'
import { getRedirected } from '../../Shared/getRedirected'
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
export const SET_STORE_SCENARIO_WEB: ActionEventType = (
  event,
  dataHandle: {
    urlParam1: string
    urlParam2: string
    urlParam3: string
    query: { s: string }
    deviceType: DeviceType
    sectionsMappingForProfile: SectionMappingType[]
    platformOS: PlatformOSYrlType
  }
) => {
  const {
    urlParam1,
    urlParam2,
    urlParam3,
    query,
    deviceType,
    sectionsMappingForProfile,
    platformOS,
  } = dataHandle

  const {
    globalVars: { idUserHost, idProfile },
    profiles,
  } = getState()

  let hostname = HOST_NAME
  if (isHostR1UserToComFlag()) hostname = 'r1.userto.com'

  console.info('SET_STORE_SCENARIO_WEB [55]', { platformOS })

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
    redirectPathname,
  } = getSetStoreScenario({
    idUserHost,
    profiles,
    hostname,
    urlParam1,
    urlParam2,
    urlParam3,
    query,
    deviceType,
    sectionsMappingForProfile,
  })

  console.info('SET_STORE_SCENARIO_WEB [82]', { platformOS, redirectPathname })

  dispatch(actionSync.SET_ID_USER_HOST({ idUserHost: idUserHostNext }))
  dispatch(actionSync.SET_ID_PROFILE_ACTIVE({ idProfileActive: idProfileNext }))
  dispatch(actionSync.TOGGLE_IS_SHOW_GLOBAL(isShowAppNext))
  dispatch(actionSync.TOGGLE_IS_LEFT_COLUMN(isLeftColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN_BLANK(isMainColumnBlankNext))
  dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))

  getRedirected(redirectPathname, { platformOS, replace: true })

  if (idProfile === idProfileNext) return

  dispatch(
    actionSync.SET_ID_PROFILE_ACTIVE({
      idProfileActive: idProfileNext,
    })
  )
}
