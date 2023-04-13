import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_ID_USER_HOST_INIT: ActionEventType = (event, data) => {
  const {
    globalVars: { idUserHost },
    profiles,
  } = getState()

  console.info('SET_ID_USER_HOST_INIT [10]', {
    idUserHost,
    'window.location.hash': window.location.hash,
    profileNameUrl: window.location.hash.replace('#', ''),
    profiles,
  })

  // dispatch(
  //   actionSync.SET_ID_USER_HOST({
  //     idUser,
  //   })
  // )
}
