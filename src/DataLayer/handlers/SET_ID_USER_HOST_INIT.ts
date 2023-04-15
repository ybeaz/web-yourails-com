import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { ProfileType } from '../../@types/ProfileType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

const { dispatch, getState } = store

export const SET_ID_USER_HOST_INIT: ActionEventType = (event, data) => {
  const {
    globalVars: { idUserHost },
    profiles,
  } = getState()

  // const profileNameUrl = window.location.hash.replace('#', '')
  const query = getParsedUrlQuery(window.location.hash)
  const profileNameUrl = query.profileName
  const show = query.s

  const profileUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileNameUrl
  )

  // TODO, STOPPED HERE
  console.info('SET_ID_USER_HOST_INIT [10]', {
    show,
    query,
    idUserHost,
    'window.location.hash': window.location.hash,
    profileNameUrl,
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
