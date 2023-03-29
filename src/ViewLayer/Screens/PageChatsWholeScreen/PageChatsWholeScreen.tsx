import React, {
  useRef,
  useEffect,
  useCallback,
  PropsWithChildren,
  useMemo,
} from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View, ViewStyle } from 'react-native'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

// import AppGiftedChat from '../../../react-native-gifted-chat/App'
// import { GiftedChatContainer } from '../../Components/GiftedChatContainer'
// import { GiftedChat } from 'react-native-gifted-chat'

import { AnimatedYrl } from '../../../ViewLibrary/AnimatedYrl/AnimatedYrl'
import { ChatCard } from '../../Components/ChatCard/ChatCard'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { PageChatsWholeScreenStyle as style } from './PageChatsWholeScreenStyle'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { RootStoreType } from '../../../@types/RootStoreType'
import { themes } from '../../Styles/themes'
import { styleGlobal } from '../../Styles/styleGlobal'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'

import { messages } from '../../../Constants/messagesMock'
import { users } from '../../../Constants/usersMock'

import localizedFormat from 'dayjs/plugin/localizedFormat'

type AnimatedYrlProps = PropsWithChildren<{
  style?: ViewStyle
  nameHtmlCssAttribute: string
  valueInit: number
  valueTarget: number
  duration: number
  isShow: boolean
}>

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const {
    globalVars: { language },
    componentsState,
  } = store
  const { modalFrame } = componentsState
  const { isShow: isShowModalFrame } = modalFrame

  useEffect(() => {
    // handleEvents.TEMPLATE({}, { id: '3' })
  }, [])

  console.info('PageChatsWholeScreen [41]', {
    // props,
    // store,
    // componentsState,
    // fadeAnim,
  })

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
      modalFrame,
      handleEvents: useCallback(handleEvents, []),
    },
    contentMenuMainColumn: {
      handleEvents: useCallback(handleEvents, []),
    },
    sidebarRightInAnimatedYrl: {
      valueInit: 0,
      valueTarget: 1,
      nameHtmlCssAttribute: 'opacity',
      duration: 1000,
      isShow: isShowModalFrame,
      testID: 'sidebarRightIn_animatedYrl',
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
      {!isShowModalFrame ? (
        <View
          style={[
            style.sidebarRight,
            themes['themeA'].colors01,
            { borderColor: themes['themeA'].colors01.borderColor },
            styleAddSidebarRight,
          ]}
          testID='sidebarRight'
        >
          <AnimatedYrl {...propsOut.sidebarRightInAnimatedYrl}>
            <TopBarChatCards />
            <ChatCard {...propsOut.chatCardProps} />
          </AnimatedYrl>
        </View>
      ) : null}
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

        <View
          style={[
            style.chatSpace,
            // themes['themeA'].colors03
          ]}
          testID='chatSpace'
        >
          <ChatSpace {...propsOut.chatSpaceProps} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export const PageChatsWholeScreen = React.memo(PageChatsWholeScreenComponent)
