import React, { createContext, useRef, useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View } from 'react-native'
import { withRouter } from 'react-router-dom'

import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

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

  const userHash = useRef(hash)

  // console.info('PageChatsWholeScreen [45]', {
  //   hashHashCurrent: userHash.current,
  //   history,
  //   pathname,
  //   hash,
  //   routeProps,
  // })

  const style = styles[deviceType]

  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1

  const {
    globalVars: { language, idUserHost },
    componentsState,
  } = store
  const { modalFrame, isSidebarRight, isMainColumn } = componentsState
  const { isShow: isShowModalFrame } = modalFrame
  const profile = profiles.find(
    (profileIn: ProfileType) => profileIn.idProfile === idUserHost
  )

  useEffect(() => {
    handleEvents.ADD_PROFILES({}, { profiles })
    handleEvents.SET_ID_USER_HOST_INIT({}, {})
    // console.info('PageChatsWholeScreen [80]', {
    //   'window.location.hash': window.location.hash,
    // })
  }, [])

  useEffect(() => {
    handleEvents.SET_SIDEBAR_MAIN_LAYOUT({}, { deviceType })
  }, [deviceType])

  const onClickOnUser = ({}, data: any) => {
    console.info('PageChatsWholeScreen [87]', { data })
  }

  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}

  const propsOut: Record<string, any> = {
    chatCardsProps: {
      profiles,
      idUserHost,
    },
    chatSpaceProps: {
      idUserHost,
      profiles,
      messages,
      modalFrame: { ...modalFrame, childProps: {} },
    },
    contentMenuMainColumnProps: {
      // styleProps: {
      //   borderColor: 'white',
      // },
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

  // console.info('PageChatsWholeScreen [148]', { idUserHost, store })

  return (
    <SafeAreaView
      style={[
        style.PageChatsWholeScreen,
        themes['themeA'].colors01,
        { borderColor: 'white' },
      ]}
      testID='PageChatsWholeScreen'
    >
      {isSidebarRight && (
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
              style={[style.contentMenuMainColumn, themes['themeA'].colors01]}
              testID='contentMenuMainColumn'
            >
              <ContentMenuMainColumn {...propsOut.contentMenuMainColumnProps} />
            </View>

            <View style={[style.chatSpace]} testID='chatSpace'>
              <ChatSpace {...propsOut.chatSpaceProps} />
            </View>
          </View>
        </AnimatedYrl>
      )}
    </SafeAreaView>
  )
}

export const PageChatsWholeScreen = React.memo(
  withStoreStateYrl(withDeviceTypeYrl(PageChatsWholeScreenComponent))
)
