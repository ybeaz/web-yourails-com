import React, { useRef, useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

import { AnimatedYrl } from '../../../YrlNativeViewLibrary/AnimatedYrl/AnimatedYrl'
import { ChatCard } from '../../Components/ChatCard/ChatCard'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { style } from './PageChatsWholeScreenStyle'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { RootStoreType } from '../../../@types/RootStoreType'
import { styleGlobal } from '../../Styles/StyleGlobal'
import { themes } from '../../Styles/themes'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { useMediaQueryRes, ScreenCaseType } from '../../Hooks/useMediaQueryRes'

import { messages } from '../../../Constants/messagesMock'
import { users } from '../../../Constants/usersMock'

import localizedFormat from 'dayjs/plugin/localizedFormat'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const store = useSelector((store2: RootStoreType) => store2)
  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1

  const {
    globalVars: { language },
    componentsState,
  } = store
  const { modalFrame } = componentsState
  const { isShow: isShowModalFrame } = modalFrame

  const { deviceType, screenCase, width } = useMediaQueryRes()

  useEffect(() => {
    // handleEvents.TEMPLATE({}, { id: '3' })
  }, [])

  const onPressButtonYrl = () => {
    console.info('App [14]', { action: 'It is pressed 3' })
  }

  const onChangeText = (value: string | undefined) => {
    console.info('App [24]', { value })
  }

  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}

  const propsOut = {
    chatCardProps: {
      user: users[0],
    },
    chatSpaceProps: {
      users,
      messages,
      modalFrame: { ...modalFrame, childProps: { a: 1 } },
      handleEvents: useCallback(handleEvents, []),
    },
    contentMenuMainColumn: {
      handleEvents: useCallback(handleEvents, []),
    },
    sidebarRightOuterAnimatedYrl: {
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
    mainColumnOuterAnimatedYrl: {
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
    sidebarRightInnerInAnimatedYrl: {
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
      ]}
      testID='PageChatsWholeScreen'
    >
      <View
        style={[
          style.sidebarRight,
          themes['themeA'].colors01,
          { borderColor: themes['themeA'].colors01.borderColor },
          styleAddSidebarRight,
        ]}
        testID='sidebarRight'
      >
        <AnimatedYrl {...propsOut.sidebarRightInnerInAnimatedYrl}>
          <TopBarChatCards />
          <ChatCard {...propsOut.chatCardProps} />
        </AnimatedYrl>
      </View>

      <AnimatedYrl {...propsOut.mainColumnOuterAnimatedYrl}>
        <View style={[style.mainColumn]} testID='mainColumn'>
          <View
            style={[
              style.topBarMainColumn,
              { borderColor: themes['themeA'].colors01.borderColor },
            ]}
            testID='topBarMainColumn'
          >
            <TopBarMainColumn />
          </View>

          <View
            style={[
              style.contentMenuMainColumn,
              themes['themeA'].colors01,
              { borderColor: themes['themeA'].colors01.borderColor },
            ]}
            testID='contentMenuMainColumn'
          >
            <ContentMenuMainColumn {...propsOut.contentMenuMainColumn} />
          </View>

          <View style={[style.chatSpace]} testID='chatSpace'>
            <ChatSpace {...propsOut.chatSpaceProps} />
          </View>
        </View>
      </AnimatedYrl>
    </SafeAreaView>
  )
}

export const PageChatsWholeScreen = React.memo(PageChatsWholeScreenComponent)
