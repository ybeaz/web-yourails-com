import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  AboutUs: {
    ...styleGlobal.typography,
    flexDirection: 'column',
    paddingTop: '1rem'.getPx(),
    paddingBottom: '1rem'.getPx(),
  },
  header3Header: { padding: '1rem'.getPx(), paddingTop: '1rem'.getPx() },
  header3HeaderText: styleGlobal.h3,
  viewWrapper: { padding: '1rem'.getPx(), flexDirection: 'row' },
  header4Header: { flex: 2 },
  header4HeaderText: { ...styleGlobal.h4 },
  text: {
    ...styleGlobal.norm,
    flex: 3,
    overflowWrap: 'anywhere',
    // wordBreak: 'break-all',
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
 * @import import { styles } from './AboutUsStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
