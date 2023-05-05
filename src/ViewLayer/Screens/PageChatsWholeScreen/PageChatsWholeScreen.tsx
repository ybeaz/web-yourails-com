import React, { useRef, useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

import { SectionMappingType } from '../../../@types/SectionMappingType'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import {
  AnimatedYrl,
  mediaParamsDefault,
  urlParamsDefault,
  withParamsMediaYrl,
  withStoreStateYrl,
} from '../../../YrlNativeViewLibrary'
import { getProfileChat } from '../../../Shared/getProfileChat'
import { getSectionsMappingForProfile } from '../../../Shared/getSectionsMappingForProfile'
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
import { sectionsMapping } from '../../../ContentMock/sectionsMappingMock'

import localizedFormat from 'dayjs/plugin/localizedFormat'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const {
    styleProps = { PageChatsWholeScreen: {} },
    mediaParams = mediaParamsDefault,
    urlParams = urlParamsDefault,
    urlParamsSearch,
    store,
  } = props
  const { deviceType } = mediaParams
  const { urlParam1, urlParam2, urlParam3 } = urlParams

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

  const query = {
    s: urlParamsSearch.get('s'),
  }

  let profile = getProfileChat({ profiles, urlParam1, urlParam2 })
  profile = profile
    ? profile
    : profiles.find(profile => profile.idProfile == idUserHost)
  const profileNameChat = profile ? profile.profileName : undefined

  const sectionsMappingForProfile: SectionMappingType[] =
    getSectionsMappingForProfile(sectionsMapping, profileNameChat)

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

  const urlParamsMediaIdentifier = JSON.stringify({
    urlParam1,
    urlParam2,
    urlParam3,
    deviceType,
  })

  useEffect(() => {
    handleEvents.SET_STORE_SCENARIO(
      {},
      {
        urlParam1,
        urlParam2,
        urlParam3,
        query,
        deviceType,
        sectionsMappingForProfile,
      }
    )
  }, [urlParamsMediaIdentifier])

  const styleAddPageChatsWholeScreen = isShowApp ? {} : styleGlobal.hidden
  const styleAddLeftColumn = {} // isShowModalFrame ? styleGlobal.hidden : {}
  const isButtonBackTopBarMainColumn =
    isButtonBackModal && isButtonCloseModal ? true : false
  const isImageAvatar =
    childNameModal === 'Profile' && isShowModalFrame === true ? false : true

  const propsOut: Record<string, any> = {
    chatCardsProps: {
      profiles: profiles,
      //   .reduce((acc: any, elem: any) => {
      //   const elemNext = Array(4).fill(elem)
      //   return [...acc, ...elemNext]
      // }, []),
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
      sectionsMapping: sectionsMappingForProfile,
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
          <View style={[style.leftColumnTopBars]} testID='leftColumnTopBars'>
            <TopBarChatCards />
          </View>
          <View
            style={[style.leftColumnChatCardSpace]}
            testID='leftColumnChatCardSpace'
          >
            <ChatCards {...propsOut.chatCardsProps} />
          </View>
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
                  style={[style.mainColumnTopBars]}
                  testID='mainColumnTopBars'
                >
                  <View
                    style={[
                      style.mainColumnTopBar,
                      {
                        borderStyle: 'solid',
                        // borderTopWidth: 1,
                        // borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      themes['themeA'].colors01,
                    ]}
                    testID='mainColumnTopBar'
                  >
                    <TopBarMainColumn {...propsOut.topBarMainColumnProps} />
                  </View>

                  <View
                    style={[
                      style.mainColumnContentMenu,
                      themes['themeA'].colors01,
                    ]}
                    testID='mainColumnContentMenu'
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
  withStoreStateYrl(withParamsMediaYrl(PageChatsWholeScreenComponent))
)
