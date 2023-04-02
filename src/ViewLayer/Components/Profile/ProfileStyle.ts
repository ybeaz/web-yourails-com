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
  },
  column1Text: {
    padding: '1rem',
    flex: 1,
  },
  column2Text: { padding: '1rem', flex: 6 },
})
