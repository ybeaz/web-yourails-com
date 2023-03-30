import React from 'react'
import Color from './Color'
import { SafeAreaView, Text } from 'react-native'

export function MessageAudio(_props: any) {
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ color: Color.alizarin, fontWeight: '600' }}>
        Audio is not implemented by GiftedChat.
      </Text>
      <Text style={{ color: Color.alizarin, fontWeight: '600' }}>
        You need to provide your own implementation by using renderMessageAudio
        prop.
      </Text>
    </SafeAreaView>
  )
}
