import { StyleSheet } from 'react-native'

/**
 * @import import { styleGlobal } from '../Styles/styleGlobal'
 */
export const styleGlobal = StyleSheet.create({
  typography: {
    fontFamily: 'Roboto-Regular', // San Francisco Font, Roboto, Arial, Poppins, Verdana, tahoma, verdana, arial, sans-serif' lucida grande
    fontSize: 16 /* 1rem */,
    fontWeight: '400',
  },
  h1: {
    fontSize: 32 /* 2rem */,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24 /* 1.5rem */,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20 /* 1.25rem */,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 16 /* 1rem */,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 14 /* 0.875rem */,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 12 /* 0.75rem */,
    fontWeight: 'bold',
  },
  norm: {
    fontSize: 16 /* 1rem */,
    fontWeight: '400',
  },
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
    flex: 0,
  },
})
