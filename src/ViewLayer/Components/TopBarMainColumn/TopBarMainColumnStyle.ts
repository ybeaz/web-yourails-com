import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TopBarMainColumnStyle = StyleSheet.create({
  TopBarMainColumn: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
  },
  avatar: {},
})
