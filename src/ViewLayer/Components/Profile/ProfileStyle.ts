import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/StyleGlobal'

export const style = StyleSheet.create({
  Profile: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
  profileItemsWrapper: {},
  qrCodeImageWrapper: {},
  rowView: {
    flexDirection: 'row',
    flex: 1,
    padding: '0.5rem',
  },
  column1: {
    paddingRight: '1rem',
  },
  column2: {
    flex: 1,
  },
  content: {},
  label: {
    fontSize: 13,
    paddingTop: '0.25rem',
  },

  messengerView: { flexDirection: 'row' },
  messengerNameText: {},
  usernameText: {},
})
