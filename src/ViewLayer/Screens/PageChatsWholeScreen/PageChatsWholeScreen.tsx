import React, { createContext, useRef, useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, ScrollView, View } from 'react-native'

import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { withStoreStateYrl } from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/ProfileType'
import {
  withDeviceTypeYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { AnimatedYrl } from '../../../YrlNativeViewLibrary'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { styles } from './PageChatsWholeScreenStyle'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { styleGlobal } from '../../Styles/styleGlobal'
import { themes } from '../../Styles/themes'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'

import { conversations } from '../../../ContentMock/conversationsMock'
import { messages } from '../../../ContentMock/messagesMock'
import { profiles } from '../../../ContentMock/profilesMock'

import localizedFormat from 'dayjs/plugin/localizedFormat'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const {
    styleProps = { PageChatsWholeScreen: {} },
    routeProps = {
      location: {
        pathname: '',
        hash: '',
      },
    },
    mediaParams = mediaParamsDefault,
    themeDafault = '',
    store,
    history,
  } = props
  const { deviceType } = mediaParams

  const {
    location: { pathname, hash },
  } = routeProps

  const style = styles[deviceType]

  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1

  const {
    globalVars: { language, idUserHost, isShowApp },
    componentsState,
  } = store
  const { modalFrame, isLeftColumn, isMainColumn, isMainColumnBlank } =
    componentsState
  const {
    childName: childNameModal,
    isShow: isShowModalFrame,
    isButtonBack: isButtonBackModal,
    isButtonClose: isButtonCloseModal,
  } = modalFrame

  console.info('PageChatsWholeScreen [70]', {
    idUserHost,
    pathname,
    hash,
    'window.location': window.location,
  })

  const profile = profiles.find(
    (profileIn: ProfileType) => profileIn.idProfile === idUserHost
  )

  // TODO: this is only the first attempt for demo purposes
  const conversationsUserHost = conversations.filter((conversation: any) => {
    return conversation.idsUsers.includes(idUserHost)
  })
  const messagesUserHost = messages.filter((message: any) => {
    return message.idConversation === conversationsUserHost[0]?.idConversation
  })

  useEffect(() => {
    handleEvents.ADD_PROFILES({}, { profiles })
    handleEvents.SET_STORE_SCENARIO({}, { pathname, hash, deviceType })
  }, [deviceType, pathname, hash])

  useEffect(() => {
    // handleEvents.SET_SIDEBAR_MAIN_LAYOUT({}, { pathname, deviceType })
  }, [deviceType])

  const onClickOnUser = ({}, data: any) => {
    console.info('PageChatsWholeScreen [87]', { data })
  }

  const styleAddPageChatsWholeScreen = isShowApp ? {} : styleGlobal.hidden
  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}
  const isButtonBackTopBarMainColumn =
    isButtonBackModal && isButtonCloseModal ? true : false
  const isImageAvatar =
    childNameModal === 'Profile' && isShowModalFrame === true ? false : true

  const propsOut: Record<string, any> = {
    chatCardsProps: {
      profiles,
      idUserHost,
    },
    chatSpaceProps: {
      idUserHost,
      profiles,
      messages: messagesUserHost,
      modalFrame: { ...modalFrame, childProps: {} },
    },
    contentMenuMainColumnProps: {
      store,
    },
    sidebarRightOuterAnimatedYrlProps: {
      styleProps: { AnimatedYrl: { height: '100%', flex: 1, opacity: 1 } },
      isActive: renderCounter.current !== 1,
      valueInit: isShowModalFrame ? 1 : 0,
      valueTarget: isShowModalFrame ? 0 : 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'sidebarRight_Outer_AnimatedYrl',
    },
    topBarMainColumnProps: {
      styleProps: {
        TopBarMainColumn: {},
      },
      profile,
      isButtonBack: isButtonBackTopBarMainColumn,
      isImageAvatar,
    },
    mainColumnOuterAnimatedYrlProps: {
      styleProps: { AnimatedYrl: { height: '100%', flex: 3, opacity: 1 } },
      isActive: renderCounter.current !== 1,
      valueInit: isShowModalFrame ? 0 : 1,
      valueTarget: isShowModalFrame ? 1 : 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'mainColumn_Outer_AnimatedYrl',
    },
    sidebarRightInnerInAnimatedYrlProps: {
      isActive: renderCounter.current !== 1,
      valueInit: isShowModalFrame ? 1 : 0,
      valueTarget: isShowModalFrame ? 0 : 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'sidebarRightIn_animatedYrl_Inner',
    },
  }

  return (
    <SafeAreaView
      style={[
        style.PageChatsWholeScreen,
        themes['themeA'].colors01,
        { borderColor: 'white' },
        styleAddPageChatsWholeScreen,
      ]}
      testID='PageChatsWholeScreen'
    >
      {isLeftColumn && (
        <View
          style={[
            style.sidebarRight,
            themes['themeA'].colors01,
            styleAddSidebarRight,
          ]}
          testID='sidebarRight'
        >
          <AnimatedYrl {...propsOut.sidebarRightInnerInAnimatedYrlProps}>
            <TopBarChatCards />
            <ChatCards {...propsOut.chatCardsProps} />
          </AnimatedYrl>
        </View>
      )}

      {isMainColumn && (
        <AnimatedYrl {...propsOut.mainColumnOuterAnimatedYrlProps}>
          <View
            style={[
              style.mainColumn,
              {
                borderStyle: 'solid',
                // borderTopWidth: 1,
                // borderRightWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              },
              themes['themeA'].colors01,
            ]}
            testID='mainColumn'
          >
            {!isMainColumnBlank && (
              <>
                <View
                  style={[style.topBarsMainColumn]}
                  testID='topBarsMainColumn'
                >
                  <View
                    style={[
                      style.topBarMainColumn,
                      {
                        // borderStyle: 'solid',
                        // borderTopWidth: 1,
                        // borderRightWidth: 1,
                        // borderBottomWidth: 1,
                        // borderLeftWidth: 1,
                      },
                      themes['themeA'].colors01,
                    ]}
                    testID='topBarMainColumn'
                  >
                    <TopBarMainColumn {...propsOut.topBarMainColumnProps} />
                  </View>

                  <View
                    style={[
                      style.contentMenuMainColumn,
                      themes['themeA'].colors01,
                    ]}
                    testID='contentMenuMainColumn'
                  >
                    <ContentMenuMainColumn
                      {...propsOut.contentMenuMainColumnProps}
                    />
                  </View>
                </View>
                <ScrollView
                  style={[style.chatSpace]}
                  contentContainerStyle={{ justifyContent: 'center' }}
                  testID='chatSpace'
                >
                  <ChatSpace {...propsOut.chatSpaceProps} />
                </ScrollView>
                {isShowModalFrame === false && (
                  <View
                    style={[style.chatInput, themes['themeA'].colors03]}
                    testID='chatInput'
                  >
                    <ChatInput />
                  </View>
                )}
              </>
            )}
          </View>
        </AnimatedYrl>
      )}
    </SafeAreaView>
  )
}

export const PageChatsWholeScreen = React.memo(
  withStoreStateYrl(withDeviceTypeYrl(PageChatsWholeScreenComponent))
)
