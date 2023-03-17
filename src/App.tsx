import { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import 'react-chat-elements/dist/main.css'
// import { ChatItem, Button } from 'react-chat-elements'
import { ButtonYrl } from './ViewLibrary/index'
import { InputTextYrl } from './ViewLibrary/index'
import { ImageYrl } from './ViewLibrary/index'

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

  const onChangeText = (value: string | undefined) => {
    console.info('App [24]', { value })
  }
  const value = ''

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World! 5</Text>
      <ButtonYrl
        title={'This title 4'}
        iconProps={iconProps}
        onPress={onPressButtonYrl}
      />
      <InputTextYrl onChangeText={onChangeText} value={value} />
      <ImageYrl uri='https://reactnative.dev/img/tiny_logo.png' />
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
