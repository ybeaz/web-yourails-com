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
  GetMessagesWithProfileActiveParamsType,
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
import '../../Styles/styleGlobal'

/**
 * @import import { ChatSpace } from '../Components/ChatSpace/ChatSpace'
 */
const ChatSpaceComponent: ChatSpaceType = props => {
  const {
    styleProps = { ChatSpace: {} },
    mediaParams = mediaParamsDefault,
    storeStateSlice,
    handleEvents,
    platformOS,
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

  const getMessagesWithProfileActiveOptions: GetMessagesWithProfileActiveParamsType =
    {
      idProfileHost,
      idProfileActive,
    }
  const messagesWithProfileActive: RootStoreType['messages'] =
    getMessagesWithProfileActive(
      messagesMemed,
      getMessagesWithProfileActiveOptions
    )

  const messagesPrep = getPreproccedMessages(
    messagesWithProfileActive,
    idProfileHost
  )

  console.info('ChatSpace [85]', { messagesPrep })

  const messagesSorted: RootStoreType['messages'] = messagesPrep.sort(
    (a, b) => (a.createdAt ? a.createdAt : 0) - (b.createdAt ? b.createdAt : 0)
  )

  const Child: FunctionComponent | null = childName
    ? MODAL_CONTENTS[childName]
    : null

  /**
   * @description Styles adjustments for different devices
   */
  const scrollViewRef = React.useRef<ScrollView>(null)
  const dateString = getDateLocale(+new Date())
  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}

  type GetLayoutModifierType = {
    modalContentMargin: number | undefined
    buttonTop: number | undefined
    buttonLeft: number | undefined
    buttonRight: number | undefined
  }

  const GetLayoutModifier: any = function (
    this: GetLayoutModifierType,
    deviceTypeIn: string
  ) {
    this.modalContentMargin = '3rem'.getPx()
    this.buttonTop = '0.5rem'.getPx()
    this.buttonLeft = '1rem'.getPx()
    this.buttonRight = '1rem'.getPx()

    const objExec: Record<string, any> = {
      xsDevice() {
        this.modalContentMargin = 0
      },
      smDevice() {
        this.modalContentMargin = '2rem'.getPx()
        this.buttonTop = '0.25rem'.getPx()
        this.buttonLeft = '0.5rem'.getPx()
        this.buttonRight = '0.5rem'.getPx()
      },
      mdDevice() {
        this.buttonTop = '0.75rem'.getPx()
      },
      lgDevice() {
        this.buttonTop = '1rem'.getPx()
      },
      xlDevice() {
        this.buttonTop = '1rem'.getPx()
      },
    }
    objExec[deviceTypeIn]
  }

  const {
    modalContentMargin,
    buttonTop,
    buttonLeft,
    buttonRight,
  }: GetLayoutModifierType = new GetLayoutModifier(deviceType)

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
              platformOS,
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
              platformOS,
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
      messages: messagesSorted,
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
