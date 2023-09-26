import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  ProfileItem: {
    ...styleGlobal.typography,
    paddingLeft: '1rem'.getPx(),
  },
  rowView: {
    flexDirection: 'row',
    flex: 1,
    padding: '0.5rem'.getPx(),
  },
  column1: {
    minWidth: '2.5rem',
    paddingRight: '1rem'.getPx(),
  },
  column2: {
    flex: 1,
  },
  content: {},
  label: {
    fontSize: 13,
    paddingTop: '0.25rem'.getPx(),
  },

  messengerView: { flexDirection: 'row' },
  messengerNameText: {},
  profilenameText: {},
  readMoreLess: {
    fontSize: 13,
    color: 'blue',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
})
