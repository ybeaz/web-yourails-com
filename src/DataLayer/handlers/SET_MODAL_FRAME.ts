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
  const { pathname } = data
  // childProps: {title},

  dispatch(actionSync.SET_MODAL_FRAME(data))

  const pathnameNext = getPathNameForReplace(pathname)

  console.info('SET_MODAL_FRAME [24]', {
    pathnameNext,
    pathname: window.location.pathname,
    'window.location': window.location,
  })

  router.navigate(pathnameNext, { replace: true })

  // Stopped here
}
