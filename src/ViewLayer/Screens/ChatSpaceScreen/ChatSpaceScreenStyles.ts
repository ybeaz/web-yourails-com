import { StyleSheet } from 'react-native'
import { debugLayout, getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  chatSpaceHeader: {},
  chatSpaceBody: {
    justifyContent: 'flex-end',
    height: '100%',
    ...debugLayout('green'),
  },
  chatSpaceFooter: {
    height: '6rem'.getPx(),
    bottom: 0,
    width: '100%',
    ...debugLayout('blue', 'grey'),
  },
})

const xsDevice = StyleSheet.create({
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
 * @import import { styles } from './ChatSpaceScreenStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
