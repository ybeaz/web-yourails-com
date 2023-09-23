import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  ChatCard: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
    paddingTop: getPx('0.5rem'),
    paddingBottom: getPx('0.5rem'),
  },
})
