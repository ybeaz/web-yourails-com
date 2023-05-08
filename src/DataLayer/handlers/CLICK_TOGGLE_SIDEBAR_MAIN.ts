import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DeviceType } from '../../YrlNativeViewLibrary'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'
import { getRedirected } from '../../Shared/getRedirected'

const { dispatch, getState } = store

/**
 * @description This toggle is called with sm/ xs screen
 *    if the user click on the user card on the left column and on the back upper back arrow
 */
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
  dispatch(actionSync.TOGGLE_IS_LEFT_COLUMN(isLeftColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
  dispatch(
    actionSync.SET_ID_PROFILE_ACTIVE({
      idProfileActive: undefined,
    })
  )

  const [urlParam0, urlParam1, urlParam2, urlParam3] =
    window.location.pathname.split('/')
  const search = window.location.search

  const getPathNameForReplaceProps = {
    urlParam1,
    urlParam2,
    urlParam3,
    search,
    tabName: '',
  }
  const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

  getRedirected(pathnameNext, { replace: true })
}
