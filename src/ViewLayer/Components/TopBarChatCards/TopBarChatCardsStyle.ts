import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  TopBarChatCards: {
    ...styleGlobal.typography,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '1rem',
  },
  buttonHamburgerWrapper: {},
  inputTextYrlWrapper: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  iconYrlWrapper: {
    position: 'absolute',
    paddingRight: '1rem',
    right: 0,
    top: '20%',
    bottom: '20%',
  },
})
