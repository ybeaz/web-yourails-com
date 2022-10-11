import { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import 'react-chat-elements/dist/main.css'
// import { ChatItem, Button } from 'react-chat-elements'
import { ButtonYrn } from './ViewLibrary/index'

export default function App() {
  console.info('App [5]', {})
  return (
    <View style={styles.container}>
      <Text style={styles.text}>321234567 Hello World!</Text>
      <ButtonYrn title={'This title'} />
      {/* <Button buttonRef={useRef('ref-123')} title={'Click me'} /> */}
      {/* {['id-1', 'id-2'].map(key => (
        <Button key={`key-${key}`} />
        // <ChatItem
        //   key={`key-${key}`}
        //   id={key}
        //   avatar={
        //     'https://upload.wikimedia.org/wikipedia/commons/3/36/Stay_Awake.svg'
        //   }
        // />
      ))} */}
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
