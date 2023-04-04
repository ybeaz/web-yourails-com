import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  Template: {
    ...styleGlobal.typography,
    flexDirection: 'column',
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
 * @import import { styles } from './TemplateStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: smDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
