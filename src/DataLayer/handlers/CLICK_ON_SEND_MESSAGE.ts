import { store } from '../store'

import { ProfileType } from '../../@types/GraphqlTypes'
import { ActionEventType } from '../../@types/ActionEventType'

import { actionSync } from '../../DataLayer/index.action'
import { getSocketEmitMessage } from '../../CommunicationLayer/socketio/getSocketEmitMessage'
import { isStubMessagesToPeopleFlag } from '../../FeatureFlags'
import { getItDelayedBy } from '../../Shared/getItDelayedBy'
import { getCreatedMessage } from '../../Shared/getCreatedMessage'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = async ({}, data) => {
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

  const params = {
    idProfileSender: idProfileHost,
    idProfileReceiver: idProfileActive,
    text: inputChat[idProfileActive],
  }
  const options = {
    isIdMessage: false /* it is assigned on server side */,
    isCreatedAt: false /* it is assigned on server side */,
    printRes: false,
  }
  const message = getCreatedMessage(params, options)

  getSocketEmitMessage(message)

  /* Here it is specified a special case under a temp flag, anounced "work in progress" state */
  if (
    isStubMessagesToPeopleFlag() &&
    (profile.profileNature === 'human' || profile.profileNature === 'company')
  ) {
    await getItDelayedBy(1500)

    const params = {
      idProfileSender: idProfileActive,
      idProfileReceiver: idProfileHost,
      text: 'The feature of sending and receiving messages to humans is available upon request.',
    }
    const options = {
      isIdMessage: true,
      isCreatedAt: true,
      printRes: false,
    }
    const message = getCreatedMessage(params, options)

    dispatch(actionSync.ADD_MESSAGE({ message }))
  }
}
