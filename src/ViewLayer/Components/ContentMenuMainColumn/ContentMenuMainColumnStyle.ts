import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  ContentMenuMainColumn: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    height: '2rem',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    paddingLeft: getPx('0.5rem'),
    paddingRight: getPx('0.5rem'),
  },
})
