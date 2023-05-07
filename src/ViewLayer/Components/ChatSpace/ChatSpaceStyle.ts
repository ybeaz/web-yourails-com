import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  ChatSpace: {
    justifyContent: 'flex-end',
  },
  ChatSpaceJsx: {
    ...styleGlobal.typography,
    flexDirection: 'column',
    padding: '0.5rem',
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewPadding: {},
  date: {
    alignItems: 'center',
    padding: '1rem',
  },
  dateText: {
    width: 'fit-content',
  },
  messages: {
    padding: '0.5rem',
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
    paddingRight: '15%',
    paddingLeft: '15%',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  viewPadding: {
    ...stylesDefault.viewPadding,
    paddingRight: '20%',
    paddingLeft: '20%',
  },
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
