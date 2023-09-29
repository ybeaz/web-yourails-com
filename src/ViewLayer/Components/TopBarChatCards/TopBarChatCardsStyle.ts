import { StyleSheet } from 'react-native'
import { debugLayout, styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  TopBarChatCards: {
    ...styleGlobal.typography,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonHamburgerWrapper: {},
  inputTextYrlWrapper: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '1rem'.getPx(),
    marginRight: '1rem'.getPx(),
  },
  InputTextYrl: {
    borderRadius: 80,
    borderWidth: 1,
  },
  inputText: {
    borderRadius: 80,
    height: '2.5rem'.getPx(),
    minHeight: '2.5rem'.getPx(),
  },
  iconYrlWrapper: {
    position: 'absolute',
    paddingRight: '1rem'.getPx(),
    right: 0,
    top: '20%',
    bottom: '20%',
  },
})
