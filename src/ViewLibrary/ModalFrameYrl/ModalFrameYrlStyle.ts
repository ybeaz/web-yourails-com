import { StyleSheet } from 'react-native'

export const ModalFrameYrlStyle = StyleSheet.create({
  ModalFrameYrl: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  content: {},
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
  },
})
