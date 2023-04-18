import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  ChatInput: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '1rem',
  },
  inputButton: {
    width: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  InputTextYrl: {
    width: '100%',
    cursor: 'pointer',
  },
  inputText: {
    width: '100%',
    borderRadius: 10,
    paddingRight: '2rem',
  },
  ButtonYrl: {
    position: 'absolute',
    margin: 0,
    padding: '10px',
    right: 20,
  },
  ButtonTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  iconYrlWrapper: {
    position: 'absolute',
    paddingRight: '1rem',
    right: 0,
    top: '20%',
    bottom: '20%',
  },
})
