import React, { useRef, useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

import { UserType } from '../../../@types/UserType'
import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { AnimatedYrl } from '../../../YrlNativeViewLibrary/AnimatedYrl/AnimatedYrl'
import { ChatCard } from '../../Components/ChatCard/ChatCard'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { styles } from './PageChatsWholeScreenStyle'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { RootStoreType } from '../../../@types/RootStoreType'
import { styleGlobal } from '../../Styles/styleGlobal'
import { themes } from '../../Styles/themes'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'

import { messages } from '../../../Constants/messagesMock'
import { users } from '../../../Constants/usersMock'

import localizedFormat from 'dayjs/plugin/localizedFormat'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const {
    styleProps = { PageChatsWholeScreen: {} },
    routeProps = {
      location: {
        pathname: '',
      },
    },
    mediaParams = mediaParamsDefault,
    themeDafault = '',
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const store = useSelector((store2: RootStoreType) => store2)
  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1

  const {
    globalVars: { language, idUserHost },
    componentsState,
  } = store
  const { modalFrame } = componentsState
  const { isShow: isShowModalFrame } = modalFrame
  const user = users.find((userIn: UserType) => userIn.id === idUserHost)

  useEffect(() => {
    // handleEvents.TEMPLATE({}, { id: '3' })
  }, [])

  const onPressButtonYrl = () => {}

  const onChangeText = (value: string | undefined) => {}

  const styleAddSidebarRight = isShowModalFrame ? styleGlobal.hidden : {}

  const propsOut: Record<string, any> = {
    chatCardProps: {
      user,
    },
    chatSpaceProps: {
      idUserHost,
      users,
      messages,
      modalFrame: { ...modalFrame, childProps: { a: 1 } },
      handleEvents: useCallback(handleEvents, []),
    },
    contentMenuMainColumnProps: {
      store,
      handleEvents: useCallback(handleEvents, []),
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
    topBarMainColumnProps: { user },
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

  console.info('PageChatsWholeScreen [112]', { user })

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
        <AnimatedYrl {...propsOut.sidebarRightInnerInAnimatedYrlProps}>
          <TopBarChatCards />
          <ChatCard {...propsOut.chatCardProps} />
        </AnimatedYrl>
      </View>

      <AnimatedYrl {...propsOut.mainColumnOuterAnimatedYrlProps}>
        <View style={[style.mainColumn]} testID='mainColumn'>
          <View
            style={[
              style.topBarMainColumn,
              { borderColor: themes['themeA'].colors01.borderColor },
            ]}
            testID='topBarMainColumn'
          >
            <TopBarMainColumn {...propsOut.topBarMainColumnProps} />
          </View>

          <View
            style={[
              style.contentMenuMainColumn,
              themes['themeA'].colors01,
              { borderColor: themes['themeA'].colors01.borderColor },
            ]}
            testID='contentMenuMainColumn'
          >
            <ContentMenuMainColumn {...propsOut.contentMenuMainColumnProps} />
          </View>

          <View style={[style.chatSpace]} testID='chatSpace'>
            <ChatSpace {...propsOut.chatSpaceProps} />
          </View>
        </View>
      </AnimatedYrl>
    </SafeAreaView>
  )
}

export const PageChatsWholeScreen = React.memo(
  withDeviceType(PageChatsWholeScreenComponent)
)
