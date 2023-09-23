import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

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
    padding: getPx('1rem'),
  },
  dateText: {
    width: 'fit-content',
  },
  messages: {},
})

const xsDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...stylesDefault,
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
