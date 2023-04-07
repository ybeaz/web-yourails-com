import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  ProfileItem: {
    ...styleGlobal.typography,
    paddingLeft: '1rem',
  },
  rowView: {
    flexDirection: 'row',
    flex: 1,
    padding: '0.5rem',
  },
  column1: {
    minWidth: '2.5rem',
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
