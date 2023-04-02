import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const ProfileStyle = StyleSheet.create({
  Profile: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
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

  // column1Text: {
  //   padding: '1rem',
  //   flex: 1,
  // },
  // column2Text: { padding: '1rem', flex: 6 },
  messengerView: { flexDirection: 'row' },
  messengerNameText: {},
  usernameText: {},
})
