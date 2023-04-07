import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  Header: {
    ...styleGlobal.typography,
  },
  headerText: {
    ...styleGlobal.h2,
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    lineHight: '125%',
  },
})

const xmDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...xmDevice,
})

const mdDevice = StyleSheet.create({
  ...xmDevice,
})

const lgDevice = StyleSheet.create({
  ...xmDevice,
})

const xlDevice = StyleSheet.create({
  ...xmDevice,
})

/**
 * @import import { styles } from './HeaderStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: smDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
