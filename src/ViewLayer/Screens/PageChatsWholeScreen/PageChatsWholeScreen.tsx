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
import { ProfileType } from '../../../@types/ProfileType'

import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { getSectionsMappingForProfile } from '../../../Shared/getSectionsMappingForProfile'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles } from './PageChatsWholeScreenStyle'
import { themes } from '../../Styles/themes'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { getSocketOnConversation } from '../../../CommunicationLayer/socketio/getSocketOnConversation'
import { getSocketDisconnected } from '../../../CommunicationLayer/socketio/getSocketDisconnected'
import { getSocketOnMessage } from '../../../CommunicationLayer/socketio/getSocketOnMessage'
import { getSocketOnPending } from '../../../CommunicationLayer/socketio/getSocketOnPending'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'

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

  const {
    componentsState,
    profiles,
    sectionsMapping,
    globalVars: { idProfileActive },
    userIdDataAwsCognito,
  } = store

  const { modalFrame, isLeftColumn, isMainColumn, isMainColumnBlank } =
    componentsState

  const { isShow: isShowModalFrame } = modalFrame

  const query = {
    s: urlParamsSearch.get('s'),
    code: urlParamsSearch.get('code'),
  }

  const profileActive: ProfileType = getProfileByIdProfile(
    profiles,
    idProfileActive
  )

  const profileNameChat = profileActive ? profileActive.profileName : undefined

  const sectionsMappingForProfile: SectionMappingType[] =
    getSectionsMappingForProfile(sectionsMapping, profileNameChat)

  const urlParamsMediaIdentifier = JSON.stringify({
    urlParam1,
    urlParam2,
    urlParam3,
    deviceType,
    sectionsMappingForProfile,
  })

  useEffect(() => {
    if (renderCounter.current === 0) {
      /** @description Add socket.io listeners **/
      getSocketOnConversation()
      getSocketOnMessage()
      getSocketOnPending()

      /** @description Obtaining a user data, loading profiles, messages, etc. as a first step **/
      handleEvents.INIT_LOADING({}, { query })

      /** @description Add the 'beforeunload' event listener to gracefully disconnect when reloading the page */
      window.addEventListener('beforeunload', getSocketDisconnected)
    }

    renderCounter.current = renderCounter.current + 1

    /** @description Clean up the event listener when the component unmounts */
    return () => {
      window.removeEventListener('beforeunload', getSocketDisconnected)
    }
  }, [])

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
      LayoutOfRow: style.layoutOfRow,
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
      isActive: profiles.length ? true : false,
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
          borderRightWidth: 1,
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
  }

  const TopBarChatCardsElement = (
    <View style={[style.leftColumnTopBars]} testID='leftColumnTopBars'>
      <TopBarChatCards />
    </View>
  )

  const MainColumnTopBars = (
    <View
      style={[style.mainColumnTopBars, themes['themeA'].colors03]}
      testID='mainColumnTopBars'
    >
      {!isMainColumnBlank ? (
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
      ) : null}

      {!isMainColumnBlank && sectionsMappingForProfile.length ? (
        <View
          style={[style.mainColumnContentMenu, themes['themeA'].colors01]}
          testID='mainColumnContentMenu'
        >
          <ContentMenuMainColumn {...propsOut.mainColumnContentMenuProps} />
        </View>
      ) : null}
    </View>
  )

  const ChatCardsElement = (
    <View
      style={[style.leftColumnChatCardSpace]}
      testID='leftColumnChatCardSpace'
    >
      <ChatCards />
    </View>
  )

  const ChatSpaceElement = <ChatSpace />

  const ChatInputElement = (
    <View
      style={[style.chatInput, themes['themeA'].colors03]}
      testID='chatInput'
    >
      {!isMainColumnBlank && isShowModalFrame === false && <ChatInput />}
    </View>
  )

  // console.info('PageChatsWholeScreen [294]', { userIdDataAwsCognito })

  return (
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/** @description <NavigationTop /> */}
      <LayoutOfRow {...propsOut.layoutOfRowNavigationTopProps}>
        {TopBarChatCardsElement}
        {MainColumnTopBars}
      </LayoutOfRow>
      {/** @description <MainContent /> */}
      <LayoutOfRow {...propsOut.layoutOfRowMainContentProps}>
        {ChatCardsElement}
        {ChatSpaceElement}
      </LayoutOfRow>
      {/** @description <NavigationBottom /> */}
      {!isShowModalFrame && (
        <LayoutOfRow {...propsOut.layoutOfRowNavigationBottomProps}>
          {null}
          {ChatInputElement}
        </LayoutOfRow>
      )}
    </LayoutScreen>
  )
}

export const PageChatsWholeScreen = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(PageChatsWholeScreenComponent))
  )
)
