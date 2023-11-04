import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  ChatSpace: {},
  ChatSpaceJsx: {
    ...styleGlobal.typography,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewPadding: {},
  date: {
    alignItems: 'center',
    padding: '1rem'.getPx(),
  },
  dateText: {
    width: 'auto',
  },
  messages: {},
  content: {
    margin: '3rem'.getPx(),
  },
  buttonWrapper: {
    top: '1rem'.getPx(),
    left: '1rem'.getPx(),
    right: '1rem'.getPx(),
  },
})

const xsDevice = StyleSheet.create({
  ...stylesDefault,
  content: {
    margin: 0,
  },
  buttonWrapper: {
    top: 0,
    left: 0,
    right: 0,
  },
})

const smDevice = StyleSheet.create({
  ...stylesDefault,
  content: {
    margin: '2rem'.getPx(),
  },
  buttonWrapper: {
    top: '0.25rem'.getPx(),
    left: '0.5rem'.getPx(),
    right: '0.5rem'.getPx(),
  },
})

const mdDevice = StyleSheet.create({
  ...stylesDefault,
  viewPadding: {
    ...stylesDefault.viewPadding,
    paddingRight: '10%',
    paddingLeft: '10%',
  },
})

const lgDevice = StyleSheet.create({
  ...stylesDefault,
  viewPadding: {
    ...stylesDefault.viewPadding,
    paddingRight: '10%',
    paddingLeft: '10%',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  viewPadding: {
    ...stylesDefault.viewPadding,
    paddingRight: '10%',
    paddingLeft: '10%',
  },
})

/**
 * @import import { styles } from './TemplateStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
