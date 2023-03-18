import { StyleSheet } from 'react-native'
import { StyleGlobal } from '../../Styles/StyleGlobal'

export const ChatInputStyle = StyleSheet.create({
  ChatInput: {
    ...StyleGlobal.style,
    flex: 1,
    flexDirection: 'column',
    margin: 'auto',
  },
})
