import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import {
  MessagesPropsType,
  MessagesPropsOutType,
  MessagesComponentType,
  MessagesType,
} from './MessagesTypes'
import { MessageEventType } from '../../../@types/MessageEventType'
import { ContentType } from '../../../@types/ContentType'
import { Message } from '../../Components/Message/Message'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'
import { styles } from './MessagesStyles'

/**
 * @description Component to render
 * @import import { Messages, MessagesPropsType, MessagesPropsOutType, MessagesType } 
             from '../Components/Messages/Messages'
 */
const MessagesComponent: MessagesComponentType = props => {
  const {
    messages,
    profiles,
    styleProps = { Messages: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const propsOut: MessagesPropsOutType = {}

  return (
    <View style={[style.Messages, styleProps.Messages]} testID='Messages'>
      {messages.map((message, index) => {
        const { idMessage, text, eventType, idProfile } = message
        const { imagePendingSrc } = getProfileByIdProfile(profiles, idProfile)
        let textNext = text

        // TODO to underderstand the logic and fix the name issue, who left
        if (
          eventType === MessageEventType['joinConversation'] ||
          eventType === MessageEventType['disconnectConversation']
        ) {
          const textParsed = typeof text === 'string' ? JSON.parse(text) : text
          const idProfileRespondent = textParsed?.idProfile || '0'
          const textJoinConversation = textParsed?.text || ''

          const { profileName } = getProfileByIdProfile(
            profiles,
            idProfileRespondent
          )
          const textObject = {
            contentType: ContentType['textArray'],
            textArray: [`${profileName} ${textJoinConversation}`],
          }
          textNext = JSON.stringify(textObject)
        }

        const propsOut = {
          messageProps: {
            ...message,
            text: textNext,
            imagePendingSrc: imagePendingSrc ? imagePendingSrc : '',
          },
        }
        return (
          <Message
            key={idMessage || `message-${index}`}
            {...propsOut.messageProps}
          />
        )
      })}
    </View>
  )
}

export const Messages: MessagesType = withParamsMediaYrl(
  React.memo(MessagesComponent)
)

export type {
  MessagesPropsType,
  MessagesPropsOutType,
  MessagesComponentType,
  MessagesType,
}
