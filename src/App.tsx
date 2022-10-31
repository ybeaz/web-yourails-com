import { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import 'react-chat-elements/dist/main.css'
// import { ChatItem, Button } from 'react-chat-elements'
import { ButtonYrl } from './ViewLibrary/index'

export default function App() {
  console.info('App [5]', {})

  const iconProps = {
    library: 'FontAwesome',
    name: 'rocket',
    size: 30,
    color: '#900',
  }

  const onPressButtonYrl = () => {
    console.info('App [14]', { action: 'It is pressed 3' })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <ButtonYrl
        title={'This title 3'}
        iconProps={iconProps}
        onPress={onPressButtonYrl}
      />

      <StatusBar style='auto' />
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
  text: {
    fontSize: 30,
    color: 'blue',
  },
})
