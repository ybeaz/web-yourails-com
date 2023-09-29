import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const MockReactNative = () => {
  return (
    <View style={styles.container}>
      <Text testID='myText'>Hello, World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
