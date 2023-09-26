import { StyleSheet } from 'react-native'
import { debugLayout, getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  chatCardsHeader: {
    display: 'flex',
    paddingTop: '0.75rem'.getPx(),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...debugLayout('green'),
  },
  chatCardsBody: {
    flexDirection: 'column',
    flex: 1,
    overflow: 'scroll',
    ...debugLayout('red'),
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
 * @import import { styles } from './ChatCardsScreenStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
