import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import {
  IS_BOTTON_BACK,
  IS_BOTTON_CLOSE,
} from '../../../Constants/modalContents.const'
import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { Text } from '../../Components/Text/Text'
import { LOCALE, DATE_FORMAT } from '../../../Constants/locale.const'
import { ChatSpaceType } from './ChatSpaceType'
import { style } from './ChatSpaceStyle'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { Message } from '../../Components/Message/Message'
import { ModalFrameYrl } from '../../../YrlNativeViewLibrary/ModalFrameYrl/ModalFrameYrl'
import { themes } from '../../Styles/themes'
import { styleGlobal } from '../../Styles/styleGlobal'
import { MODAL_CONTENTS } from '../../../Constants/modalContents.const'

/**
 * @import import { ChatSpace } from '../Components/ChatSpace/ChatSpace'
 */
const ChatSpaceComponent: ChatSpaceType = props => {
  const {
    styleProps = { ChatSpace: {} },
    mediaParams = mediaParamsDefault,
    users,
    messages,
    modalFrame,
    handleEvents,
  } = props

  const { deviceType } = mediaParams
  const { childName, isShow: isShowModalFrame, childProps } = modalFrame

  const userFound = users.find(user => user.id === messages[0].idUser)
  const user = userFound ? userFound : users[0]
  const Child = MODAL_CONTENTS[childName]

  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}

  let modalContentMargin: string | number = '3rem'
  if (deviceType === 'xsDevice') modalContentMargin = 0
  else if (deviceType === 'smDevice') modalContentMargin = '2rem'

  const propsOut = {
    messageProps: {
      ...messages[0],
      user,
      isMessageTailed: true,
    },
    ChatCardProps: {
      user: users[0],
    },
    modalFrameYrlProps: {
      styleProps: {
        ModalFrameYrl: {},
        imageBackground: {
          backgroundColor: themes['themeA'].colors07.backgroundColor,
        },
        content: {
          margin: modalContentMargin,
          ...themes['themeA'].colors03,
        },
      },
      linearGradientColors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.25)'],
      children: <Child {...childProps} />,
      isShow: isShowModalFrame,
      isShowImageBackground: true,
      testID: 'ChatSpace_modalFrameYrl',
      buttonBack: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonBack',
        disabled: false,
        onPress: () =>
          handleEvents.SET_MODAL_FRAME(
            {},
            {
              childName,
              isShow: false,
              childProps: {},
            }
          ),
        iconProps: {
          library: 'Ionicons',
          name: 'arrow-back-outline',
          size: '1.5rem',
          color: 'green',
          testID: 'ModalFrameYrl-buttonBack-iconBack',
        },
      },
      buttonClose: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonClose',
        disabled: false,
        onPress: () =>
          handleEvents.SET_MODAL_FRAME(
            {},
            {
              childName,
              isShow: false,
              childProps: {},
            }
          ),
        iconProps: {
          library: 'Ionicons',
          name: 'close',
          size: '1.5rem',
          color: 'green',
          testID: 'ModalFrameYrl-buttonClose-iconClose',
        },
      },
      imageBackgroundSource: undefined, // require('../../../Assets/canopy-of-leaves-2.jpg'),
      isButtonBack: IS_BOTTON_BACK,
      isButtonClose: IS_BOTTON_CLOSE,
    },
  }

  const createdAt = messages[0].createdAt
  const dateString = dayjs(createdAt).locale(LOCALE).format(DATE_FORMAT)

  const ChatSpaceJsx = () => (
    <View
      style={[style.ChatSpace, themes['themeA'].colors03, styleAddSidebarRight]}
      testID='ChatSpace'
    >
      <View style={[style.viewPadding]} testID='viewPadding'>
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
    </View>
  )

  return (
    <>
      {!isShowModalFrame ? (
        <ChatSpaceJsx />
      ) : (
        <ModalFrameYrl {...propsOut.modalFrameYrlProps} />
      )}
    </>
  )
}

export const ChatSpace = React.memo(withDeviceType(ChatSpaceComponent))
