import React, { ReactElement } from 'react'
import { ScrollView, View } from 'react-native'

import { ProfileType } from '../../../@types/ProfileType'

import {
  AnimatedYrl,
  withPropsYrl,
  ModalFrameYrl,
  urlParamsDefault,
  withStoreStateYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'

import { getProfileChat } from '../../../Shared/getProfileChat'
import { getDateLocale } from '../../../Shared/getDateLocale'
import { MessageType } from '../../../@types/MessageType'
import { getPreproccedMessages } from '../../../Shared/getPreproccedMessages'
import { Text } from '../../Components/Text/Text'
import { ChatSpaceType } from './ChatSpaceType'
import { styles } from './ChatSpaceStyle'
import { Message } from '../../Components/Message/Message'
import { themes } from '../../Styles/themes'
import { styleGlobal } from '../../Styles/styleGlobal'
import { MODAL_CONTENTS } from '../../../Constants/modalContents.const'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

/**
 * @import import { ChatSpace } from '../Components/ChatSpace/ChatSpace'
 */
const ChatSpaceComponent: ChatSpaceType = props => {
  const {
    styleProps = { ChatSpace: {} },
    mediaParams = mediaParamsDefault,
    urlParams = urlParamsDefault,
    store,
    handleEvents,
    messages,
  } = props

  const { deviceType } = mediaParams
  const { urlParam1, urlParam2 } = urlParams
  const style = styles[deviceType]

  const {
    globalVars: { idProfileHost },
    componentsState,
    profiles,
  } = store

  const { modalFrame } = componentsState

  const {
    childName,
    isShow: isShowModalFrame,
    isButtonBack,
    isButtonClose,
    childProps,
  } = modalFrame

  const profileActive: ProfileType = getProfileChat({
    profiles,
    urlParam1,
    urlParam2,
  })

  const Child = childName ? MODAL_CONTENTS[childName] : null

  const messagesPrep = getPreproccedMessages(messages, idProfileHost)

  /**
   * @description Styles adjustments for different devices
   */
  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}
  let modalContentMargin: string | number = '3rem'
  let buttonTop = '0.5rem'
  let buttonLeft = '1rem'
  let buttonRight = '1rem'
  if (deviceType === 'xsDevice') {
    modalContentMargin = 0
  } else if (deviceType === 'smDevice') {
    modalContentMargin = '2rem'
    buttonTop = '0.25rem'
    buttonLeft = '0.5rem'
    buttonRight = '0.5rem'
  } else if (deviceType === 'mdDevice') {
    buttonTop = '0.7rem'
  } else if (deviceType === 'lgDevice' || deviceType === 'xlDevice') {
    buttonTop = '1rem'
  }

  const propsOut = {
    messageProps: {
      ...messages[0],
      profile: profileActive,
      isTail: true,
    },
    ChatCardProps: {
      profile: profileActive,
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
        buttonBackWrapper: { top: buttonTop, left: buttonLeft },
        buttonCloseWrapper: { top: buttonTop, right: buttonRight },
      },
      linearGradientColors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.25)'],
      isShow: isShowModalFrame,
      isShowImageBackground: true,
      testID: 'ChatSpace_modalFrameYrl',
      buttonBackProps: {
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
          styleProps: { IconYrl: {} },
          library: 'Ionicons',
          name: 'arrow-back-outline',
          size: 24,
          color: themes['themeA'].colors07.color,
          testID: 'ModalFrameYrl-buttonBack-iconBack',
        },
      },
      buttonCloseProps: {
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
          styleProps: { IconYrl: {} },
          library: 'Ionicons',
          name: 'close',
          size: 24,
          color: themes['themeA'].colors07.color,
          testID: 'ModalFrameYrl-buttonClose-iconClose',
        },
      },
      imageBackgroundSource: undefined, // require('../../../Assets/canopy-of-leaves-2.jpg'),
      isButtonBack,
      isButtonClose,
    },
    chatSpaceJsxAnimatedYrlProps: {
      isActive: true,
      valueInit: isShowModalFrame ? 1 : 0,
      valueTarget: isShowModalFrame ? 0 : 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'chatSpaceJsxAnimatedYrl',
    },
    modalFrameYrlAnimatedYrlProps: {
      styleProps: { AnimatedYrl: {} },
      isActive: true,
      valueInit: isShowModalFrame ? 0 : 1,
      valueTarget: isShowModalFrame ? 1 : 0,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'ChatSpace_leftColumnIn_animatedYrl_Inner',
    },
  }

  let dateString = getDateLocale(messages)

  const getMessagesJsx = (messagesIn: MessageType[]): ReactElement[] => {
    return messagesIn.map((message: MessageType, index: number) => {
      const propsOut = {
        messageProps: message,
      }
      return <Message key={`message-${index}`} {...propsOut.messageProps} />
    })
  }

  const ChatSpaceJsx = () => (
    <View
      style={[
        style.ChatSpaceJsx,
        themes['themeA'].colors03,
        styleAddSidebarRight,
      ]}
      testID='ChatSpaceJsx'
    >
      <View style={[style.viewPadding]} testID='viewPadding'>
        <View style={style.date} testID='date'>
          <Text style={style.dateText} testID='dateText'>
            {dateString}
          </Text>
        </View>
        <View style={style.messages} testID='messages'>
          {getMessagesJsx(messagesPrep)}
        </View>
      </View>
    </View>
  )

  const scrollViewRef = React.useRef<ScrollView>(null)

  return (
    <ScrollView
      style={[themes['themeA'].colors03]}
      contentContainerStyle={{}}
      ref={scrollViewRef}
      nestedScrollEnabled={true}
      onContentSizeChange={(contentWidth, contentHeight) => {
        if (isShowModalFrame) {
          scrollViewRef.current?.scrollTo({
            y: 0,
            animated: true,
          })
          return
        }
        scrollViewRef.current?.scrollTo({
          y: contentHeight,
          animated: true,
        })
      }}
      testID='ScrollViewChatSpace'
    >
      <View style={[style.ChatSpace, styleProps.ChatSpace]} testID='ChatSpace'>
        {messages.length && !isShowModalFrame ? (
          <AnimatedYrl {...propsOut.chatSpaceJsxAnimatedYrlProps}>
            <ChatSpaceJsx />
          </AnimatedYrl>
        ) : null}

        {childName && (
          <AnimatedYrl {...propsOut.modalFrameYrlAnimatedYrlProps}>
            <ModalFrameYrl {...propsOut.modalFrameYrlProps}>
              <Child {...childProps} />
            </ModalFrameYrl>
          </AnimatedYrl>
        )}
      </View>
    </ScrollView>
  )
}

export const ChatSpace = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(ChatSpaceComponent))
  )
)
