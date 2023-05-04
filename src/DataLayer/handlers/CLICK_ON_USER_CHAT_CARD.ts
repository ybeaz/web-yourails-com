import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'
import { getRedirected } from '../../Shared/getRedirected'

const { dispatch } = store

export const CLICK_ON_USER_CHAT_CARD: ActionEventType = (event, data) => {
  const { idUser, profileName, urlParam1, urlParam2, query } = data
  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser,
    })
  )

  const getPathNameForReplaceProps = {
    urlParam1,
    urlParam2,
    profileName,
    query,
  }

  const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

  getRedirected(pathnameNext, { replace: true })
}
