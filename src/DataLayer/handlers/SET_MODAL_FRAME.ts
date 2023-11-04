import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'
import { getRedirected } from '../../Shared/getRedirected'

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
export const SET_MODAL_FRAME: ActionEventType = (_, data) => {
  const { platformOS, pathname: tabName } = data

  dispatch(actionSync.SET_MODAL_FRAME(data))

  const [__, urlParam1, urlParam2, urlParam3] =
    window?.location?.pathname?.split('/')
  const search = window?.location?.search

  const getPathNameForReplaceProps = {
    urlParam1,
    urlParam2,
    urlParam3,
    search,
    tabName,
  }
  const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

  getRedirected(pathnameNext, { platformOS, replace: true })
}
