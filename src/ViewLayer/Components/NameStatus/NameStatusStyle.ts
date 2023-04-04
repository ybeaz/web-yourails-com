import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const NameStatusStyle = StyleSheet.create({
  NameStatus: {
    ...styleGlobal.typography,
    paddingLeft: '1rem',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  status: {
    fontSize: 14,
    alignSelf: 'flex-end',
  },
})
