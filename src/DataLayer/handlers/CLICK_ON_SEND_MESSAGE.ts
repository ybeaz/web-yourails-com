import { store } from '../store'

import { ContentType } from '../../@types/ContentType'
import { ProfileType } from '../../@types/GraphqlTypes'
import { ActionEventType } from '../../@types/ActionEventType'
import { MessageEventType } from '../../@types/MessageEventType'

import { actionSync } from '../../DataLayer/index.action'
import { getSortedArray } from '../../Shared/getSortedArray'
import { getSocketEmitMessage } from '../../CommunicationLayer/socketio/getSocketEmitMessage'
import { isStubMessagesToPeopleFlag } from '../../FeatureFlags'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = ({}, data) => {
  const {
    profileActive: { idProfile: idProfileActive },
  } = data

  const {
    profiles,
    forms: { inputChat },
    globalVars: { idProfileHost },
  } = getState()

  dispatch(actionSync.SET_INPUT_CHAT({ idProfileActive, text: '' }))

  const profile =
    profiles.find(
      (profile: ProfileType) => profile.idProfile === idProfileActive
    ) || {}

  if (
    isStubMessagesToPeopleFlag() &&
    (profile.profileNature === 'human' || profile.profileNature === 'company')
  ) {
  }

  console.info('CLICK_ON_SEND_MESSAGE [30]', {
    profile,
    idProfileActive,
    isStubMessagesToPeopleFlagRes: isStubMessagesToPeopleFlag(),
  })

  const idConversation = JSON.stringify(
    getSortedArray([idProfileHost, idProfileActive])
  )

  const textObj = {
    contentType: ContentType['textArray'],
    textArray: [inputChat[idProfileActive]],
  }
  const textNext = JSON.stringify(textObj)

  const message = {
    idConversation,
    idProfile: idProfileHost,
    text: textNext,
    eventType: MessageEventType['chatMessage'],
  }

  getSocketEmitMessage(message)
}
