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

  const query = getParsedUrlQuery(window.location.hash)
  const profileNameUrl = query.profileName
  const showType = query.s

  const profileUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileNameUrl
  )

  const idUserUrl = profileUrl.idUser

  let modalFrameNext
  window.location.hostname
  if (window.location.hostname === 'r1.userto.com') {
    modalFrameNext = {
      childName: 'Portfolio', // Portfolio, Profile CompetencyTags
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
    dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  } else if (showType === 'bc') {
    modalFrameNext = {
      childName: 'Portfolio',
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
    dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  } else if (showType === 'ct') {
    modalFrameNext = {
      childName: 'Portfolio',
      isShow: false,
      isButtonBack: true,
      isButtonClose: true,
      childProps: {},
    }
    dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  } else {
    console.info('SET_ID_USER_HOST_INIT [71]', { showType })
    dispatch(actionSync.TOGGLE_IS_SHOW_GLOBAL({ isShowApp: false }))
  }

  if (idUserHost === idUserUrl) return

  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser: idUserUrl,
    })
  )
}
