import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

const { dispatch, getState } = store

export const CLICK_ON_USER_CHAT_CARD: ActionEventType = (event, data) => {
  const { idUser, profileName } = data
  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser,
    })
  )

  const query = getParsedUrlQuery(window.location.hash)

  if (profileName && query.s)
    window.location.hash = `${profileName}?s=${query.s}`
  else if (profileName) window.location.hash = `${profileName}`
}