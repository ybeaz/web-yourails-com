import React, { useRef, useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { useSearchParams, useParams } from 'react-router-native'

import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { withStoreStateYrl } from '../../../YrlNativeViewLibrary'
import {
  withDeviceTypeYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { AnimatedYrl } from '../../../YrlNativeViewLibrary'
import { getProfileChat } from '../../../Shared/getProfileChat'
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
import { contentSections } from '../../../ContentMock/contentSectionsMock'
import { sectionsMappingProfiles } from '../../../ContentMock/sectionsMappingMock'

import localizedFormat from 'dayjs/plugin/localizedFormat'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const {
    styleProps = { PageChatsWholeScreen: {} },
    mediaParams = mediaParamsDefault,
    store,
  } = props
  const { deviceType } = mediaParams

  const style = styles[deviceType]

  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1

  console.info('PageChatsWholeScreen [47]', { contentSections })

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

  const { urlParam1, urlParam2 } = useParams()
  const [searchParams] = useSearchParams()
  const query = {
    s: searchParams.get('s'),
  }

  const profile = getProfileChat({ urlParam1, urlParam2, profiles })
  const profileNameChat = profile ? profile.profileName : undefined
  const sectionsMapping = profileNameChat
    ? sectionsMappingProfiles[profileNameChat]
    : undefined

  console.info('PageChatsWholeScreen [73]', {
    sectionsMapping,
    urlParam1,
    urlParam2,
    idUserHost,
    profile,
  })

  // TODO: To create another profile and show the conversation. This is only the first attempt for demo purposes
  const conversationsUserHost = conversations.filter((conversation: any) => {
    return conversation.idsUsers.includes(idUserHost)
  })
  const messagesUserHost = messages.filter((message: any) => {
    return message.idConversation === conversationsUserHost[0]?.idConversation
  })

  useEffect(() => {
    handleEvents.ADD_PROFILES({}, { profiles })
  }, [])

  useEffect(() => {
    // if (renderCounter.current > 1) return
    handleEvents.SET_STORE_SCENARIO(
      {},
      { urlParam1, urlParam2, query, deviceType }
    )
  }, [urlParam1, urlParam2, deviceType])

  const styleAddPageChatsWholeScreen = isShowApp ? {} : styleGlobal.hidden
  const styleAddLeftColumn = {} // isShowModalFrame ? styleGlobal.hidden : {}
  const isButtonBackTopBarMainColumn =
    isButtonBackModal && isButtonCloseModal ? true : false
  const isImageAvatar =
    childNameModal === 'Profile' && isShowModalFrame === true ? false : true

  const propsOut: Record<string, any> = {
    chatCardsProps: {
      profiles,
      idUserHost,
      urlParam1,
      urlParam2,
      query,
    },
    chatSpaceProps: {
      styleProps: {
        ChatSpace: {
          minHeight: '-webkit-fill-available',
        },
      },
      idUserHost,
      profiles,
      messages: messagesUserHost,
      modalFrame: { ...modalFrame, childProps: {} },
    },
    contentMenuMainColumnProps: {
      styleProps: {
        buttonWrapper: {
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 1,
          borderTopColor: themes['themeA'].colors01.borderColor,
          borderRightColor: themes['themeA'].colors01.borderColor,
          borderBottomColor: themes['themeA'].colors01.borderColor,
          borderLeftColor: themes['themeA'].colors01.borderColor,
        },
      },
      sectionsMapping,
      store,
    },
    leftColumnOuterAnimatedYrlProps: {
      styleProps: { AnimatedYrl: { height: '100%', flex: 1, opacity: 1 } },
      isActive: renderCounter.current !== 1,
      valueInit: isShowModalFrame ? 1 : 0,
      valueTarget: isShowModalFrame ? 0 : 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'leftColumn_Outer_AnimatedYrl',
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
      styleProps: {
        AnimatedYrl: { height: '100%', flex: 3, opacity: 1 },
      },
      isActive: renderCounter.current !== 1,
      valueInit: isShowModalFrame ? 0 : 1,
      valueTarget: isShowModalFrame ? 1 : 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'mainColumn_Outer_AnimatedYrl',
    },
    leftColumnInnerInAnimatedYrlProps: {
      isActive: renderCounter.current !== 1,
      valueInit: isShowModalFrame ? 1 : 0,
      valueTarget: isShowModalFrame ? 1 : 0,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'leftColumnIn_animatedYrl_Inner',
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
            style.leftColumn,
            themes['themeA'].colors01,
            styleAddLeftColumn,
          ]}
          testID='leftColumn'
        >
          <TopBarChatCards />
          <ChatCards {...propsOut.chatCardsProps} />
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
                borderRightWidth: 1,
                // borderBottomWidth: 1,
                // borderLeftWidth: 1,
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
                        borderStyle: 'solid',
                        // borderTopWidth: 1,
                        // borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
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
                  contentContainerStyle={{
                    minHeight: '-webkit-fill-available',
                  }}
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
