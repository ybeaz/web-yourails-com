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
  buttonCloseWrapper: {
    position: 'absolute',
    top: '-0.7rem',
    right: '-0.5rem',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    margin: '3rem',
    padding: '3rem',
  },
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
  },
})
