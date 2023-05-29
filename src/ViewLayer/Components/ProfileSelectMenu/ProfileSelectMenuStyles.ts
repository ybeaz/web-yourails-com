import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  ProfileSelectMenu: {
    ...styleGlobal.typography,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '1rem',
    paddingBottom: '0.5rem',
  },
})

const xmDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...stylesDefault,
})

const mdDevice = StyleSheet.create({
  ...stylesDefault,
})

const lgDevice = StyleSheet.create({
  ...stylesDefault,
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
})

/**
 * @import import { styles } from './ProfileSelectMenuStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: smDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
