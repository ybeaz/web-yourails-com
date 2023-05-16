import React, { useRef, useEffect } from 'react'
import { View } from 'react-native'

import {
  mediaParamsDefault,
  urlParamsDefault,
  withParamsMediaYrl,
  withPropsYrl,
  withStoreStateYrl,
} from '../../../YrlNativeViewLibrary'

import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { SectionMappingType } from '../../../@types/SectionMappingType'
import { MessageType } from '../../../@types/MessageType'
import { ProfileType } from '../../../@types/ProfileType'

import {
  getMessagesWithProfileActive,
  GetMessagesWithProfileActivePropsType,
} from '../../../Shared/getMessagesWithProfileActive'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { getProfileChat } from '../../../Shared/getProfileChat'
import { getSectionsMappingForProfile } from '../../../Shared/getSectionsMappingForProfile'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles } from './PageChatsWholeScreenStyle'
import { themes } from '../../Styles/themes'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'

import { conversations } from '../../../ContentMock/conversationsMock'
import { messages } from '../../../ContentMock/messagesMock'
import { profiles as profilesIn } from '../../../ContentMock/profilesMock'
import { sectionsMapping as sectionsMappingIn } from '../../../ContentMock/sectionsMappingMock'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const {
    styleProps = { PageChatsWholeScreen: {} },
    mediaParams = mediaParamsDefault,
    urlParams = urlParamsDefault,
    urlParamsSearch,
    handleEvents,
    store,
  } = props
  const { deviceType } = mediaParams
  const { urlParam1, urlParam2, urlParam3 } = urlParams

  const style = styles[deviceType]

  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1

  const {
    globalVars: { idProfileHost, idProfileActive },
    componentsState,
    profiles,
    sectionsMapping,
  } = store

  const { modalFrame, isLeftColumn, isMainColumn, isMainColumnBlank } =
    componentsState

  const { isShow: isShowModalFrame } = modalFrame

  const query = {
    s: urlParamsSearch.get('s'),
  }

  const profileActive: ProfileType = getProfileChat({
    profiles,
    urlParam1,
    urlParam2,
  })
  const profileNameChat = profileActive ? profileActive.profileName : undefined
  const sectionsMappingForProfile: SectionMappingType[] =
    getSectionsMappingForProfile(sectionsMapping, profileNameChat)

  const getMessagesWithProfileActiveProps: GetMessagesWithProfileActivePropsType =
    {
      conversations,
      messages,
      idProfileHost,
      idProfileActive,
    }
  const messagesWithProfileActive: MessageType[] = getMessagesWithProfileActive(
    getMessagesWithProfileActiveProps
  )

  const initDataIdentifier = JSON.stringify({
    profilesIn,
    sectionsMappingIn,
  })

  useEffect(() => {
    handleEvents.ADD_PROFILES({}, { profiles: profilesIn })
    handleEvents.ADD_SECTIONS_MAPPING(
      {},
      { sectionsMapping: sectionsMappingIn }
    )
    console.info('PageChatsWholeScreen [120]')
  }, [initDataIdentifier])

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

  const layoutOfRowProps = {
    isLeftColumn,
    isMainColumn,
    styleProps: {
      LayoutOfRow: style.LayoutOfRow,
    },
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
        },
        leftColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          borderRightWidth: isMainColumnBlank ? 1 : 0,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        mainColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          borderRightWidth: isMainColumnBlank ? 0 : 1,
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
        },
        leftColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        mainColumn: {
          borderStyle: 'solid',
          borderTopWidth:
            !isMainColumnBlank && sectionsMappingForProfile.length ? 1 : 0,
          borderRightWidth: isMainColumnBlank ? 0 : 1,
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
        },
        leftColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
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
    },
    mainColumnChatSpaceProps: {
      styleProps: {
        ChatSpace: {},
      },
      messages: messagesWithProfileActive,
      idProfileHost,
      idProfileActive,
      profileActive,
      modalFrame: { ...modalFrame, childProps: {} },
    },
  }

  const TopBarChatCardsElement = (
    <View style={[style.leftColumnTopBars]} testID='leftColumnTopBars'>
      <TopBarChatCards />
    </View>
  )

  const MainColumnTopBars = (
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
        <TopBarMainColumn />
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

  const ChatCardsElement = (
    <View
      style={[style.leftColumnChatCardSpace]}
      testID='leftColumnChatCardSpace'
    >
      <ChatCards />
    </View>
  )

  const ChatSpaceElement = <ChatSpace {...propsOut.mainColumnChatSpaceProps} />

  const ChatInputElement = (
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

  console.info('PageChatsWholeScreen [399]', { store })

  return (
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/** @description <NavigationTop /> */}
      <LayoutOfRow {...propsOut.layoutOfRowNavigationTopProps}>
        {TopBarChatCardsElement}
        {!isMainColumnBlank && MainColumnTopBars}
      </LayoutOfRow>
      {/** @description <MainContent /> */}
      <LayoutOfRow {...propsOut.layoutOfRowMainContentProps}>
        {ChatCardsElement}
        {!isMainColumnBlank && ChatSpaceElement}
      </LayoutOfRow>
      {/** @description <NavigationBottom /> */}
      <LayoutOfRow {...propsOut.layoutOfRowNavigationBottomProps}>
        {null}
        {!isMainColumnBlank && ChatInputElement}
      </LayoutOfRow>
    </LayoutScreen>
  )
}

export const PageChatsWholeScreen = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(PageChatsWholeScreenComponent))
  )
)
