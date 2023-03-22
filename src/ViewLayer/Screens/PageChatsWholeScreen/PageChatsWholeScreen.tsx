import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

// import AppGiftedChat from '../../../react-native-gifted-chat/App'
import { GiftedChatContainer } from '../../Components/GiftedChatContainer'
import { GiftedChat } from 'react-native-gifted-chat'

import { LOCALE, DATE_FORMAT } from '../../../Constants/locale.const'
import { Message } from '../../Components/Message/Message'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { themes } from '../../Styles/themes'
import { ChatCard } from '../../Components/ChatCard/ChatCard'
import { PageChatsWholeScreenStyle as style } from './PageChatsWholeScreenStyle'

import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { messages } from '../../../Constants/messagesMock'

import { users } from '../../../Constants/usersMock'

import localizedFormat from 'dayjs/plugin/localizedFormat'

export const PageChatsWholeScreen: PageChatsWholeScreenType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const {
    globalVars: { language },
  } = store

  useEffect(() => {
    handleEvents(
      {},
      {
        typeEvent: 'TEMPLATE',
        data: { id: '3' },
      }
    )
  }, [])

  console.info('PageChatsWholeScreen [41]', {
    props,
    store,
    users01: users[0],
  })

  // const canonicalUrl = `${URL_APP_BASE}${props?.routeProps.location.pathname}`

  const iconProps = {
    library: 'FontAwesome',
    name: 'rocket',
    size: 30,
    color: '#900',
  }

  const onPressButtonYrl = () => {
    console.info('App [14]', { action: 'It is pressed 3' })
  }

  const onChangeText = (value: string | undefined) => {
    console.info('App [24]', { value })
  }

  const propsOut = {
    messageProps: {
      ...messages[0],
      isMessageTailed: true,
    },
    ChatCardProps: {
      user: users[0],
    },
  }

  const createdAt = messages[0].createdAt
  const dateString = dayjs(createdAt).locale(LOCALE).format(DATE_FORMAT)

  return (
    <View
      style={[style.PageChatsWholeScreen, themes['themeA'].colors03]}
      testID='PageChatsWholeScreen'
    >
      <View
        style={[style.sidebarRight, themes['themeA'].colors01]}
        testID='sidebarRight'
      >
        <ChatCard {...propsOut.ChatCardProps} />
      </View>
      <View style={style.mainColumn} testID='mainColumn'>
        {/* <GiftedChatContainer /> */}
        <View style={style.topBarMainColumn} testID='topBarMainColumn'>
          <TopBarMainColumn />
        </View>
        <View style={style.chatSpace} testID='chatSpace'>
          <View style={style.date} testID='date'>
            <Text style={style.dateText} testID='dateText'>
              {dateString}
            </Text>
          </View>
          <View style={style.messages} testID='messages'>
            <Message {...propsOut.messageProps} />
            <Message {...propsOut.messageProps} />
          </View>
          <View style={style.chatInput} testID='chatInput'>
            <ChatInput />
          </View>
        </View>
      </View>
    </View>
  )
}
