import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from '../../react-native-gifted-chat/src/index'

export const GiftedChatContainer = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      // @ts-ignore
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          id: 2,
          name: 'React Native',
          avatar: 'https://yourails.com/images/sphinx-02.jpg',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
