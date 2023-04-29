import { store } from '../store'
import { router } from '../../RouterScreensConfig'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

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

  const [urlParam0, urlParam1, urlParam2, urlParam3] =
    window.location.pathname.split('/')

  let pathnameNext = ''
  if (urlParam2 && urlParam2[0] === '@')
    pathnameNext = `/${urlParam1}/${urlParam2}/${pathname}`
  else if (!urlParam2 && urlParam1 && urlParam1[0] === '@')
    pathnameNext = `/${urlParam1}/${pathname}`
  else if (!urlParam2 && urlParam1 && urlParam1[0] !== '@')
    pathnameNext = `/${urlParam1}`

  console.info('SET_MODAL_FRAME [24]', {
    pathnameNext,
    urlParam1,
    urlParam2,
    urlParam3,
    pathname: window.location.pathname,
    'window.location': window.location,
  })

  router.navigate(pathnameNext, { replace: true })

  // Stopped here
}
