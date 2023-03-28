import React, { useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text } from 'react-native'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

// import AppGiftedChat from '../../../react-native-gifted-chat/App'
// import { GiftedChatContainer } from '../../Components/GiftedChatContainer'
// import { GiftedChat } from 'react-native-gifted-chat'

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

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const {
    globalVars: { language },
    componentsState,
  } = store
  const { modalFrame } = componentsState
  const { isShow: isShowModalFrame } = modalFrame

  useEffect(() => {
    handleEvents.TEMPLATE({}, { id: '3' })
  }, [])

  // console.info('PageChatsWholeScreen [41]', {
  //   // props,
  //   // store,
  //   // style: [style.PageChatsWholeScreen, themes['themeA'].colors01],
  //   // colors01: themes['themeA'].colors01,
  //   componentsState,
  //   isShowModalFrame,
  // })

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
      <SafeAreaView
        style={[
          style.sidebarRight,
          themes['themeA'].colors01,
          { borderColor: themes['themeA'].colors01.borderColor },
          styleAddSidebarRight,
        ]}
        testID='sidebarRight'
      >
        <TopBarChatCards />
        <ChatCard {...propsOut.chatCardProps} />
      </SafeAreaView>
      <SafeAreaView style={[style.mainColumn]} testID='mainColumn'>
        <SafeAreaView
          style={[
            style.topBarMainColumn,
            { borderColor: themes['themeA'].colors01.borderColor },
          ]}
          testID='topBarMainColumn'
        >
          <TopBarMainColumn />
        </SafeAreaView>

        <SafeAreaView
          style={[
            style.contentMenuMainColumn,
            themes['themeA'].colors01,
            { borderColor: themes['themeA'].colors01.borderColor },
          ]}
          testID='contentMenuMainColumn'
        >
          <ContentMenuMainColumn {...propsOut.contentMenuMainColumn} />
        </SafeAreaView>

        <SafeAreaView
          style={[
            style.chatSpace,
            // themes['themeA'].colors03
          ]}
          testID='chatSpace'
        >
          <ChatSpace {...propsOut.chatSpaceProps} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export const PageChatsWholeScreen = React.memo(PageChatsWholeScreenComponent)
