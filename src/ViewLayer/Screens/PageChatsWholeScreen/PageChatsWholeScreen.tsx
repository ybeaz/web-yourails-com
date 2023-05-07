import React, { useRef, useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

import {
  mediaParamsDefault,
  urlParamsDefault,
  withParamsMediaYrl,
  withStoreStateYrl,
} from '../../../YrlNativeViewLibrary'
import {
  getFilteredObjsArrayBy,
  OperatorType,
} from '../../../Shared/getFilteredObjsArrayBy'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { getProfileChat } from '../../../Shared/getProfileChat'
import { getSectionsMappingForProfile } from '../../../Shared/getSectionsMappingForProfile'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { SectionMappingType } from '../../../@types/SectionMappingType'
import { styleGlobal } from '../../Styles/styleGlobal'
import { styles } from './PageChatsWholeScreenStyle'
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
    globalVars: { language, idProfileHost, idProfileActive, isShowApp },
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

  const profileHost =
    profiles && profiles.find(profile => profile.idProfile == idProfileHost)

  let profileActive = getProfileChat({ profiles, urlParam1, urlParam2 })
  profileActive = profileActive
    ? profileActive
    : profiles.find(profile => profile.idProfile == idProfileHost)
  const profileNameChat = profileActive ? profileActive.profileName : undefined

  const sectionsMappingForProfile: SectionMappingType[] =
    getSectionsMappingForProfile(sectionsMapping, profileNameChat)

  // TODO: To create another profile and show the conversation. This is only the first attempt for demo purposes
  const conversationsWithProfileActive = conversations.filter(
    (conversation: any) => {
      return conversation.idsProfiles.includes(idProfileActive)
    }
  )
  const messagesWithProfileActive = messages.filter((message: any) => {
    return (
      message.idConversation ===
      conversationsWithProfileActive[0]?.idConversation
    )
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

  const profilesChatCards = getFilteredObjsArrayBy(
    profiles,
    'idProfile',
    idProfileHost,
    OperatorType['!==']
  )

  const isButtonBackTopBarMainColumn =
    isButtonBackModal && isButtonCloseModal ? true : false
  const isImageAvatar =
    childNameModal === 'Profile' && isShowModalFrame === true ? false : true

  const mainColumnOuterAnimatedYrlProps = {
    styleProps: {
      AnimatedYrl: { flex: 3, opacity: 1 },
    },
    isActive: renderCounter.current !== 1,
    valueInit: isShowModalFrame ? 0 : 1,
    valueTarget: isShowModalFrame ? 1 : 1,
    nameHtmlCssAttribute: 'opacity',
    duration: 1000,
    trigger: isShowModalFrame,
    triggerShouldEqual: isShowModalFrame ? true : false,
    testID: 'mainColumn_Outer_AnimatedYrl',
  }

  const layoutOfRowProps = {
    isLeftColumn,
    isMainColumn,
    styleProps: {
      LayoutOfRow: style.LayoutOfRow,
    },
    mainColumnOuterAnimatedYrlProps,
  }

  const propsOut: Record<string, any> = {
    layoutScreenProps: {
      styleProps: {
        LayoutScreen: {},
        layoutNavigationTop: {
          height: sectionsMappingForProfile.length ? '6rem' : '4rem',
        },
        layoutMainContent: {
          top: sectionsMappingForProfile.length ? '6rem' : '4rem',
          bottom: isShowModalFrame ? 0 : '4rem',
        },
        layoutNavigationBottom: { height: '4rem' },
      },
    },
    layoutOfRowNavigationTopProps: {
      ...layoutOfRowProps,
      styleProps: {
        LayoutOfRow: {
          ...layoutOfRowProps.styleProps.LayoutOfRow,
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        leftColumn: {},
        mainColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          borderRightWidth: 1,
          // borderBottomWidth: 1,
          // borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
      },
    },
    layoutOfRowMainContentProps: {
      ...layoutOfRowProps,
      styleProps: {
        LayoutOfRow: {
          ...layoutOfRowProps.styleProps.LayoutOfRow,
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        leftColumn: {},
        mainColumn: {
          borderStyle: 'solid',
          borderTopWidth: 1,
          borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
      },
    },
    layoutOfRowNavigationBottomProps: {
      ...layoutOfRowProps,
      styleProps: {
        LayoutOfRow: {
          ...layoutOfRowProps.styleProps.LayoutOfRow,
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        leftColumn: {},
        mainColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
      },
    },
    leftColumnOuterAnimatedYrlProps: {
      styleProps: { AnimatedYrl: { flex: 1, opacity: 1 } },
      isActive: renderCounter.current !== 1,
      valueInit: isShowModalFrame ? 1 : 0,
      valueTarget: isShowModalFrame ? 0 : 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      trigger: isShowModalFrame,
      triggerShouldEqual: isShowModalFrame ? true : false,
      testID: 'leftColumn_Outer_AnimatedYrl',
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
    topBarChatCards: { profileHost, idProfileActive },
    chatCardsProps: {
      profiles: profilesChatCards,
      idProfileActive,
      urlParam1,
      urlParam2,
      query,
    },
    mainColumnContentMenuProps: {
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
    topBarMainColumnProps: {
      styleProps: {
        TopBarMainColumn: {},
      },
      profileActive,
      isButtonBack: isButtonBackTopBarMainColumn,
      isImageAvatar,
    },
    mainColumnChatSpaceProps: {
      styleProps: {
        ChatSpace: {},
      },
      idProfileHost,
      idProfileActive,
      profileActive,
      messages: messagesWithProfileActive,
      modalFrame: { ...modalFrame, childProps: {} },
    },
  }

  const scrollViewRef = React.useRef<ScrollView>(null)

  const TopBarChatCardsElement = () => (
    <View style={[style.leftColumnTopBars]} testID='leftColumnTopBars'>
      <TopBarChatCards {...propsOut.topBarChatCards} />
    </View>
  )

  const MainColumnTopBars = () => (
    <>
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

      {sectionsMappingForProfile.length ? (
        <View
          style={[style.mainColumnContentMenu, themes['themeA'].colors01]}
          testID='mainColumnContentMenu'
        >
          <ContentMenuMainColumn {...propsOut.mainColumnContentMenuProps} />
        </View>
      ) : null}
    </>
  )

  const ChatCardsElement = () => (
    <View
      style={[style.leftColumnChatCardSpace]}
      testID='leftColumnChatCardSpace'
    >
      <ChatCards {...propsOut.chatCardsProps} />
    </View>
  )

  const ChatSpaceElement = () => (
    <>
      {!isMainColumnBlank && (
        <ScrollView
          style={[style.mainColumnChatSpace, themes['themeA'].colors03]}
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
          testID='mainColumnChatSpace'
        >
          <ChatSpace {...propsOut.mainColumnChatSpaceProps} />
        </ScrollView>
      )}
    </>
  )

  const ChatInputElement = () => (
    <>
      {isShowModalFrame === false && (
        <View
          style={[style.chatInput, themes['themeA'].colors03]}
          testID='chatInput'
        >
          <ChatInput />
        </View>
      )}
    </>
  )

  return (
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/** @description <NavigationTop /> */}
      <LayoutOfRow {...propsOut.layoutOfRowNavigationTopProps}>
        <TopBarChatCardsElement />
        <MainColumnTopBars />
      </LayoutOfRow>
      {/** @description <MainContent /> */}
      <LayoutOfRow {...propsOut.layoutOfRowMainContentProps}>
        <ChatCardsElement />
        <ChatSpaceElement />
      </LayoutOfRow>
      {/** @description <NavigationBottom /> */}
      <LayoutOfRow {...propsOut.layoutOfRowNavigationBottomProps}>
        {null}
        <ChatInputElement />
      </LayoutOfRow>
    </LayoutScreen>
  )
}

export const PageChatsWholeScreen = React.memo(
  withStoreStateYrl(withParamsMediaYrl(PageChatsWholeScreenComponent))
)
