import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  ChatCard: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
    paddingTop: '0.45rem',
    paddingBottom: '0.45rem',
  },
})
