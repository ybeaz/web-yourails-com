import React, { useEffect, FunctionComponent, useRef, useMemo } from 'react'
import { ScrollView, View } from 'react-native'

import { RootStoreType } from '../../../@types/RootStoreType'

import {
  AnimatedYrl,
  withPropsYrl,
  ModalFrameYrl,
  urlParamsDefault,
  withStoreStateSliceYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'

import {
  getMessagesWithProfileActive,
  GetMessagesWithProfileActivePropsType,
} from '../../../Shared/getMessagesWithProfileActive'
import { getDateLocale } from '../../../Shared/getDateLocale'
import { getPreproccedMessages } from '../../../Shared/getPreproccedMessages'
import { Text } from '../../Components/Text/Text'
import { Messages } from '../Messages/Messages'
import { ChatSpaceType } from './ChatSpaceType'
import { styles } from './ChatSpaceStyle'
import { themes } from '../../Styles/themes'
import { styleGlobal } from '../../Styles/styleGlobal'
import { MODAL_CONTENTS } from '../../../Constants/modalContents.const'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { getPx } from '../../Styles/styleGlobal'

/**
 * @import import { ChatSpace } from '../Components/ChatSpace/ChatSpace'
 */
const ChatSpaceComponent: ChatSpaceType = props => {
  const {
    styleProps = { ChatSpace: {} },
    mediaParams = mediaParamsDefault,
    storeStateSlice,
    handleEvents,
  } = props

  const { deviceType, height: heightScreen } = mediaParams
  const style = styles[deviceType]

  const { idProfileHost, idProfileActive, modalFrame, profiles, messages } =
    storeStateSlice

  const {
    childName,
    isShow: isShowModalFrame,
    isButtonBack,
    isButtonClose,
    childProps,
  } = modalFrame

  const renderCounter = useRef(0)

  useEffect(() => {
    if (renderCounter.current === 0) {
      handleEvents.ADD_MESSAGES({}, {})
    }
    renderCounter.current = renderCounter.current + 1
  }, [])

  const messagesMemed = useMemo(() => messages, [JSON.stringify(messages)])

  const getMessagesWithProfileActiveProps: GetMessagesWithProfileActivePropsType =
    {
      messages: messagesMemed,
      idProfileHost,
      idProfileActive,
    }
  const messagesWithProfileActive: RootStoreType['messages'] =
    getMessagesWithProfileActive(getMessagesWithProfileActiveProps)

  const Child: FunctionComponent | null = childName
    ? MODAL_CONTENTS[childName]
    : null

  const messagesPrep = getPreproccedMessages(
    messagesWithProfileActive,
    idProfileHost
  )

  /**
   * @description Styles adjustments for different devices
   */
  const scrollViewRef = React.useRef<ScrollView>(null)
  const dateString = getDateLocale(+new Date())
  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}
  let modalContentMargin: string | number = getPx('3rem')
  let buttonTop = getPx('0.5rem')
  let buttonLeft = getPx('1rem')
  let buttonRight = getPx('1rem')
  if (deviceType === 'xsDevice') {
    modalContentMargin = 0
  } else if (deviceType === 'smDevice') {
    modalContentMargin = getPx('2rem')
    buttonTop = getPx('0.25rem')
    buttonLeft = getPx('0.5rem')
    buttonRight = getPx('0.5rem')
  } else if (deviceType === 'mdDevice') {
    buttonTop = getPx('0.75rem')
  } else if (deviceType === 'lgDevice' || deviceType === 'xlDevice') {
    buttonTop = getPx('1rem')
  }

  const propsOut: Record<string, any> = {
    scrollViewProps: {
      style: [themes['themeA'].colors03],
      contentContainerStyle: {},
      ref: scrollViewRef,
      nestedScrollEnabled: true,
      onContentSizeChange: (contentHeight: number) => {
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
      },
      testID: 'ScrollViewChatSpace',
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
    modalFrameAwaitViewProps: {
      styleProps: {
        ModalFrameYrl: { height: '100%' },
        imageBackground: {
          backgroundColor: themes['themeA'].colors01.backgroundColor,
        },
        content: {
          height: '100%',
          marginLeft: '45%',
          marginRight: '46%',
          marginTop: heightScreen / 3,
          // ...themes['themeA'].colors03,
        },
        buttonBackWrapper: {},
        buttonCloseWrapper: {},
      },
      linearGradientColors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.25)'],
      isShow: isShowModalFrame,
      testID: 'ChatSpace_modalFrameAwaitView',
      buttonBackProps: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonBack',
        disabled: true,
        onPress: () => {},
        iconProps: undefined,
      },
      buttonCloseProps: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonClose',
        disabled: false,
        onPress: () => {},
        iconProps: undefined,
      },
      isShowImageBackground: false,
      imageBackgroundSource: undefined, // require('../../../Assets/canopy-of-leaves-2.jpg'),
      isButtonBack: false,
      isButtonClose: false,
    },
    modalFrameYrlAnimatedYrlAwaitViewProps: {
      styleProps: { AnimatedYrl: { height: '100%' } },
      isActive: true,
      valueInit: isShowModalFrame ? 0 : 0.5,
      valueTarget: isShowModalFrame ? 0.5 : 0,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'ChatSpace_leftColumnIn_animatedYrl_Inner',
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
    messagesProps: {
      messages: messagesPrep,
      profiles,
    },
  }

  return (
    <ScrollView {...propsOut.scrollViewProps}>
      <View style={[style.ChatSpace, styleProps.ChatSpace]} testID='ChatSpace'>
        {messagesWithProfileActive.length && !isShowModalFrame ? (
          <AnimatedYrl {...propsOut.chatSpaceJsxAnimatedYrlProps}>
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
                  <Text
                    style={[
                      style.dateText,
                      { color: themes['themeB'].color09 },
                    ]}
                    testID='dateText'
                  >
                    {dateString}
                  </Text>
                </View>

                <Messages {...propsOut.messagesProps} />
              </View>
            </View>
          </AnimatedYrl>
        ) : null}

        {childName && childName !== 'AwaitView' && (
          <AnimatedYrl {...propsOut.modalFrameYrlAnimatedYrlProps}>
            <ModalFrameYrl {...propsOut.modalFrameYrlProps}>
              {Child && <Child {...childProps} />}
            </ModalFrameYrl>
          </AnimatedYrl>
        )}

        {isShowModalFrame && childName && childName === 'AwaitView' && (
          <AnimatedYrl {...propsOut.modalFrameYrlAnimatedYrlAwaitViewProps}>
            <ModalFrameYrl {...propsOut.modalFrameAwaitViewProps}>
              {Child && <Child {...childProps} />}
            </ModalFrameYrl>
          </AnimatedYrl>
        )}
      </View>
    </ScrollView>
  )
}

export const ChatSpace = withPropsYrl({ handleEvents: handleEventsProp })(
  withStoreStateSliceYrl(
    ['idProfileHost', 'idProfileActive', 'modalFrame', 'profiles', 'messages'],
    withParamsMediaYrl(React.memo(ChatSpaceComponent))
  )
)
