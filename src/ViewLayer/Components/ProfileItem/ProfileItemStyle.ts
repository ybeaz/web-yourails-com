import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  ProfileItem: {
    ...styleGlobal.typography,
    paddingLeft: getPx('1rem'),
  },
  rowView: {
    flexDirection: 'row',
    flex: 1,
    padding: getPx('0.5rem'),
  },
  column1: {
    minWidth: '2.5rem',
    paddingRight: getPx('1rem'),
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
  profilenameText: {},
  readMoreLess: {
    fontSize: 13,
    color: 'blue',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
})
