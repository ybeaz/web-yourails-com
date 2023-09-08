import { StyleSheet } from 'react-native'

const themeA = StyleSheet.create({
  colors01: {
    // color black, backgroundColor white, borderColor light-grey
    color: '#192332e6',
    backgroundColor: '#fcfdfc',
    borderColor: '#dfe1e5',
  },
  colors02: {
    // color blue, backgroundColor grey
    color: '#3390ec',
    backgroundColor: '#fcfdfc',
  },
  colors03: {
    // color black, backgroundColor grey, borderColor light-grey
    color: '#192332e6',
    backgroundColor: '#f5f5f5',
    borderColor: '#dfe1e5',
  },
  colors05: {
    // color grey, backgroundColor white
    color: '#707579',
    backgroundColor: '#fcfdfc',
  },
  colors06: {
    borderColor: '#fcfdfc',
  },
  colors07: {
    // color white, backgroundColor blue
    color: '#fcfdfc',
    backgroundColor: '#3390ec',
  },
  colors08: {
    // color dark-blue, backgroundColor white
    color: '#3f51b5',
    backgroundColor: '#e6ebee',
  },
  colors09: {
    // color black, backgroundColor whitesmoke
    color: '#3f51b5',
    backgroundColor: '#e6ebee',
  },
})

/**
 * @description This is experiment to create a flat, one level color scheme
 */
const themeB: Record<string, string> = {
  color09: '#707579' /* X light grey */,
  color10: '#adb1b5' /* XXX grey */,
}

/**
 * @import import { themes } from '../Styles/themes'
 */
export const themes = {
  themeA,
  themeB,
}
