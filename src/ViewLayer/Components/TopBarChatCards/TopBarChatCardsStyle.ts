import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/StyleGlobal'

export const style = StyleSheet.create({
  TopBarChatCards: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '1rem',
    paddingTop: '0.6rem',
    paddingBottom: '0.5rem',
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
