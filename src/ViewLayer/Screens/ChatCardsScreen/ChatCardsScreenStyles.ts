import { StyleSheet } from 'react-native'
import { debugLayout, getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  chatCardsHeader: {
    display: 'flex',
    paddingTop: getPx('0.75rem'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...debugLayout('green'),
  },
  chatCardsBody: {
    flexDirection: 'column',
    flex: 1,
    overflow: 'scroll',
    minHeight: 300,
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
