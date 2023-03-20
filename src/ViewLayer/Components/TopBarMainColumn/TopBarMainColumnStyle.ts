import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TopBarMainColumnStyle = StyleSheet.create({
  TopBarMainColumn: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
  },
  avatar: {},
  ImageYrl: {},
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
})
