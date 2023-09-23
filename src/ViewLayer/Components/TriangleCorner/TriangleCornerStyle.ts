import { StyleSheet } from 'react-native'
import { getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  TriangleCorner: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 15,
    borderTopWidth: 15,
    backgroundColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '180deg' }],
    borderTopRightRadius: 10,
  },
  notShow: {
    opacity: 0,
  },
})
