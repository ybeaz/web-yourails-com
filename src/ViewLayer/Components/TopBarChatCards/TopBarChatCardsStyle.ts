import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

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
    marginLeft: 16,
    marginRight: 16,
  },
  InputTextYrl: {
    borderRadius: 80,
    borderWidth: 1,
  },
  inputText: {
    borderRadius: 80,
  },
  iconYrlWrapper: {
    position: 'absolute',
    paddingRight: 16,
    right: 0,
    top: '20%',
    bottom: '20%',
  },
})
