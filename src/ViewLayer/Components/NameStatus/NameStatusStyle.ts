import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  NameStatus: {
    ...styleGlobal.typography,
    paddingLeft: '1rem'.getPx(),
  },
  firstRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
