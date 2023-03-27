import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import { LOCALE, DATE_FORMAT } from '../../../Constants/locale.const'
import { ChatSpaceType } from './ChatSpaceType'
import { ChatSpaceStyle as style } from './ChatSpaceStyle'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { Message } from '../../Components/Message/Message'
import { ModalFrameYrl } from '../../../ViewLibrary/ModalFrameYrl/ModalFrameYrl'
import { themes } from '../../Styles/themes'
import { MODAL_CONTENTS } from '../../../Constants/modalContents.const'

/**
 * @import import { ChatSpace } from '../Components/ChatSpace/ChatSpace'
 */
const ChatSpaceComponent: ChatSpaceType = props => {
  const { styleProps = { ChatSpace: {} }, users, messages, modalFrame } = props
  const { childName, isShow, childProps } = modalFrame

  const userFound = users.find(user => user.id === messages[0].idUser)
  const user = userFound ? userFound : users[0]
  const Child = MODAL_CONTENTS[childName]

  const propsOut = {
    messageProps: {
      ...messages[0],
      user,
      isMessageTailed: true,
    },
    ChatCardProps: {
      user: users[0],
    },
    modalFrameYrl: {
      styleProps: {
        ModalFrameYrl: {},
        content: {
          ...themes['themeA'].colors03,
        },
      },
      isShow,
      isShowImageBackground: true,
      testID: 'ChatSpace_ModalFrameYrl',
      children: <Child {...childProps} />,
      imageBackgroundSource: require('../../../Assets/canopy-of-leaves-2.jpg'),
    },
  }

  const createdAt = messages[0].createdAt
  const dateString = dayjs(createdAt).locale(LOCALE).format(DATE_FORMAT)

  return (
    <>
      <View
        style={[style.ChatSpace, themes['themeA'].colors03]}
        testID='ChatSpace'
      >
        <View style={style.date} testID='date'>
          <Text style={style.dateText} testID='dateText'>
            {dateString}
          </Text>
        </View>
        <View style={style.messages} testID='messages'>
          <Message {...propsOut.messageProps} />
          <Message {...propsOut.messageProps} />
        </View>
        <View style={style.chatInput} testID='chatInput'>
          <ChatInput />
        </View>
      </View>
      <ModalFrameYrl {...propsOut.modalFrameYrl} />
    </>
  )
}

export const ChatSpace = React.memo(ChatSpaceComponent)
