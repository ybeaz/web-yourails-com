import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  Profile: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
  profileItemsWrapper: {},
  qrCodeImageWrapper: {},
  rowView: {
    flexDirection: 'row',
    flex: 1,
    padding: '0.5rem',
  },
  column1: {
    paddingRight: '1rem',
  },
  column2: {
    flex: 1,
  },
  content: {},
  label: {
    fontSize: 13,
    paddingTop: '0.25rem',
  },

  messengerView: { flexDirection: 'row' },
  messengerNameText: {},
  usernameText: {},
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
