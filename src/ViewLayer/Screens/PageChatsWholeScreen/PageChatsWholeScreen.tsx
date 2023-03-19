import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

// import AppGiftedChat from '../../../react-native-gifted-chat/App'
import { GiftedChatContainer } from '../../Components/GiftedChatContainer'

import { GiftedChat } from 'react-native-gifted-chat'

import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ButtonYrl, InputTextYrl, ImageYrl } from '../../../ViewLibrary/index'

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

  console.info('PageChatsWholeScreen  [41]', {
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

  const propsOut = {}

  const value = ''

  return (
    <View testID='PageChatsWholeScreen' style={style.PageChatsWholeScreen}>
      <View testID='sidebarRight' style={style.sidebarRight}></View>
      <View testID='mainColumn' style={style.mainColumn}>
        <GiftedChatContainer />
        <Text>{'\n\n\n'}</Text>
        <ChatInput />
        <Text>{'\n\n\n'}</Text>
      </View>
    </View>
  )
}
