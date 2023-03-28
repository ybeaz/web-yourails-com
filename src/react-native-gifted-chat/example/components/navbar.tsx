import React from 'react'
import { SafeAreaView, Text, Platform } from 'react-native'

export function NavBar() {
  if (Platform.OS === 'web') {
    return null
  }
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
      }}
    >
      <Text>💬 Gifted Chat{'\n'}</Text>
    </SafeAreaView>
  )
}
