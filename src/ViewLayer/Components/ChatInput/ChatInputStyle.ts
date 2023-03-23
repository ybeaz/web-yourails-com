import { StyleSheet } from 'react-native'

export const ChatInputStyle = StyleSheet.create({
  ChatInput: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputButton: {
    width: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  InputTextYrl: {
    width: '100%',
  },
  inputText: {
    width: '100%',
    borderRadius: 10,
    paddingRight: '2rem',
  },
  ButtonYrl: {
    position: 'absolute',
    margin: '0 0 0 0',
    padding: '10px',
    right: 20,
  },
  ButtonTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
})