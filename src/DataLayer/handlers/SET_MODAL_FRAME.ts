import { store } from '../store'
import { router } from '../../RouterScreensConfig'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'

const { dispatch } = store

/**
 * @description: Action to show or hide a modal frame
 * @params
  event,
  {
    childName,
    isShow: false,
    childProps: {},
  }
 */
export const SET_MODAL_FRAME: ActionEventType = (event, data) => {
  const { pathname: tabName } = data
  // childProps: {title},

  dispatch(actionSync.SET_MODAL_FRAME(data))

  const [urlParam0, urlParam1, urlParam2, urlParam3] =
    window.location.pathname.split('/')

  const getPathNameForReplaceProps = {
    urlParam1,
    urlParam2,
    urlParam3,
    tabName,
  }
  const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

  router.navigate(pathnameNext, { replace: true })
}
