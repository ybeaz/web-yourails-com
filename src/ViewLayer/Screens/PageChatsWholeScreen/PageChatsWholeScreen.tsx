import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
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

  useEffect(() => {
    handleEvents.TEMPLATE({}, { id: '3' })
  }, [])

  // console.info('PageChatsWholeScreen [41]', {
  //   // props,
  //   // store,
  //   // style: [style.PageChatsWholeScreen, themes['themeA'].colors01],
  //   // colors01: themes['themeA'].colors01,
  //   componentsState,
  // })

  const onPressButtonYrl = () => {
    console.info('App [14]', { action: 'It is pressed 3' })
  }

  const onChangeText = (value: string | undefined) => {
    console.info('App [24]', { value })
  }

  const propsOut = {
    chatCardProps: {
      user: users[0],
    },
    chatSpaceProps: {
      users,
      messages,
      modalFrame,
    },
    contentMenuMainColumn: {
      handleEvents,
    },
  }

  return (
    <View
      style={[
        style.PageChatsWholeScreen,
        themes['themeA'].colors01,
        { borderColor: themes['themeA'].colors01.borderColor },
      ]}
      testID='PageChatsWholeScreen'
    >
      <View
        style={[
          style.sidebarRight,
          themes['themeA'].colors01,
          { borderColor: themes['themeA'].colors01.borderColor },
        ]}
        testID='sidebarRight'
      >
        <TopBarChatCards />
        <ChatCard {...propsOut.chatCardProps} />
      </View>
      <View style={[style.mainColumn]} testID='mainColumn'>
        {/* <GiftedChatContainer /> */}
        <View
          style={[style.topBarMainColumn, themes['themeA'].colors01]}
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
          style={[style.chatSpace, themes['themeA'].colors03]}
          testID='chatSpace'
        >
          <ChatSpace {...propsOut.chatSpaceProps} />
        </View>
      </View>
    </View>
  )
}

export const PageChatsWholeScreen = React.memo(PageChatsWholeScreenComponent)
