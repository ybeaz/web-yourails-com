import { StyleSheet } from 'react-native'

const themeA = StyleSheet.create({
  colors01: {
    // color black, backgroundColor white
    color: 'rgba(25, 35, 50, 0.9)',
    backgroundColor: '#fcfdfc',
  },
  colors02: {
    // color blue, backgroundColor white
    color: '#3390ec',
    backgroundColor: '#fcfdfc',
  },
  colors03: {
    // color black, backgroundColor grey
    color: 'rgba(25, 35, 50, 0.9)',
    backgroundColor: '#e6ebee',
  },
})

/**
 * @import import { themes } from '../Styles/Themes'
 */
export const themes = {
  themeA,
}
