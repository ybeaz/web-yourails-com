import { router } from '../../RouterScreensConfig'
import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_ON_USER_CHAT_CARD: ActionEventType = (event, data) => {
  const { idUser, profileName, urlParam1, urlParam2, query } = data
  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser,
    })
  )

  let newPath = `/${urlParam1}/${profileName}` /** @comment if (urlParam1 && urlParam2) */

  if (urlParam1 && !urlParam2 && query?.s) {
    newPath = `/${profileName}?s=${query.s}`
  } else if (urlParam1 && !urlParam2 && !query?.s) {
    newPath = `/${profileName}`
  }

  router.navigate(newPath)
}
