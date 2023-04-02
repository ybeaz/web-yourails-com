import { StyleSheet } from 'react-native'

/**
 * @import import { styleGlobal } from '../Styles/styleGlobal'
 */
export const styleGlobal = StyleSheet.create({
  typography: {
    fontFamily: 'lucida grande', // tahoma, verdana, arial, sans-serif'
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
    flex: 0,
  },
})
