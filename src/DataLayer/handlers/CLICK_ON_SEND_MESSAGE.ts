import { store } from '../store'

import { ProfileType } from '../../@types/GraphqlTypes'
import { ActionEventType } from '../../@types/ActionEventType'

import { actionSync } from '../../DataLayer/index.action'
import { getSocketEmitMessage } from '../../CommunicationLayer/socketio/getSocketEmitMessage'
import {
  isRequiredRegistrationForMessagingFlag,
  isRequiredPermissionToMessageToPeopleFlag,
} from '../../FeatureFlags'
import { getCreatedMessage } from '../../Shared/getCreatedMessage'
import { getProfileByIdProfile } from '../../Shared/getProfileByIdProfile'

const { dispatch, getState } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = ({}, {}) => {
  const {
    profiles,
    forms: { inputChat },
    userIdDataAwsCognito: { sub },
    globalVars: { idProfileHost, idProfileActive },
  } = getState()

  dispatch(actionSync.SET_INPUT_CHAT({ idProfileActive, text: '' }))

  const profile: ProfileType = getProfileByIdProfile(profiles, idProfileActive)

  /* Here it is specified a special cases */
  if (isRequiredRegistrationForMessagingFlag()) {
    if (!sub) {
      const params = {
        idProfileSender: idProfileActive,
        idProfileReceiver: idProfileHost,
        text: 'The feature of sending and receiving messages is available after registration.',
      }
      const options = {
        addMs: 1500,
        isIdMessage: true,
        isCreatedAt: true,
        printRes: false,
      }
      const message = getCreatedMessage(params, options)

      console.info('CLICK_ON_SEND_MESSAGE [45]', { message })
      dispatch(actionSync.ADD_MESSAGE({ message }))
      return
    }
  }

  if (
    isRequiredPermissionToMessageToPeopleFlag() &&
    (profile?.profileNature === 'human' || profile?.profileNature === 'company')
  ) {
    const params = {
      idProfileSender: idProfileActive,
      idProfileReceiver: idProfileHost,
      text: 'The feature of sending and receiving messages to humans is available upon request.',
    }
    const options = {
      addMs: 1500,
      isIdMessage: true,
      isCreatedAt: true,
      printRes: false,
    }
    const message = getCreatedMessage(params, options)

    dispatch(actionSync.ADD_MESSAGE({ message }))
    return
  }

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
}
