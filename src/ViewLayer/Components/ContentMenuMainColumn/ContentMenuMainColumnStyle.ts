import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  ContentMenuMainColumn: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    height: '2rem'.getPx(),
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    paddingLeft: '0.5rem'.getPx(),
    paddingRight: '0.5rem'.getPx(),
  },
})
