import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { ProfileType } from '../../@types/ProfileType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_ID_USER_HOST_INIT: ActionEventType = (event, data) => {
  const {
    globalVars: { idUserHost },
    profiles,
  } = getState()

  const profileNameUrl = window.location.hash.replace('#', '')

  const profileUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileNameUrl
  )

  // TODO, STOPPED HERE
  console.info('SET_ID_USER_HOST_INIT [10]', {
    idUserHost,
    'window.location.hash': window.location.hash,
    profileNameUrl: window.location.hash.replace('#', ''),
    profiles,
    profileUrl,
    'window.location': window.location,
  })

  if (!profileUrl) return

  const idUserUrl = profileUrl.idUser

  console.info('SET_ID_USER_HOST_INIT [10]', {
    idUserUrl,
  })

  if (idUserHost === idUserUrl) return

  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser: idUserUrl,
    })
  )
}
