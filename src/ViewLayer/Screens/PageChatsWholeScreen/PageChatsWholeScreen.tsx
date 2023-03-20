import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

// import AppGiftedChat from '../../../react-native-gifted-chat/App'
import { GiftedChatContainer } from '../../Components/GiftedChatContainer'

import { GiftedChat } from 'react-native-gifted-chat'

import { Message } from '../../Components/Message/Message'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'

import { useSelector } from 'react-redux'
import { PageChatsWholeScreenStyle as style } from './PageChatsWholeScreenStyle'

import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'

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

  const messages = [
    {
      createdAt: '2023-03-20T02:36:31.285Z',
      id: 1,
      text: '1 Hello developer',
      user: {
        id: 1,
        name: 'React Native',
        avatar: 'https://yourails.com/images/sphinx-01.jpg',
      },
      position: 'left',
    },
    {
      createdAt: '2023-03-20T02:37:54.762Z',
      id: 'y3pp3EGkPuaZTsMi_S0fu',
      text: '2-1 Some text for the Greeting',
      user: {
        id: 2,
      },
      position: 'right',
    },
    {
      createdAt: '2023-03-20T02:39:40.762Z',
      id: 'y3pp3EGkPuaZTsMi_g6t5',
      text: '2-2 Some text for the Greeting',
      user: {
        id: 2,
      },
      position: 'right',
    },
  ]

  const propsOut = {
    messageProps: {
      ...messages[0],
    },
  }

  const value = ''

  return (
    <View testID='PageChatsWholeScreen' style={style.PageChatsWholeScreen}>
      <View testID='sidebarRight' style={style.sidebarRight}></View>
      <View testID='mainColumn' style={style.mainColumn}>
        <TopBarMainColumn />
        <GiftedChatContainer />
        <Text>{'\n\n\n'}</Text>
        <Message {...propsOut.messageProps} />
        <ChatInput />
      </View>
    </View>
  )
}
