import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  Header: {
    ...styleGlobal.typography,
  },
  headerText: {
    ...styleGlobal.h2,
    paddingLeft: getPx('0.5rem'),
    paddingRight: getPx('0.5rem'),
    lineHight: '125%',
  },
})

const xsDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...xsDevice,
})

const mdDevice = StyleSheet.create({
  ...xsDevice,
})

const lgDevice = StyleSheet.create({
  ...xsDevice,
})

const xlDevice = StyleSheet.create({
  ...xsDevice,
})

/**
 * @import import { styles } from './HeaderStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
