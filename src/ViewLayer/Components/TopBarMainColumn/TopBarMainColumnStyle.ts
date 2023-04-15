import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  TopBarMainColumn: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    paddingTop: '0.45rem',
    paddingBottom: '0.45rem',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  buttonBackToCardsWrapper: {
    paddingLeft: '1.5rem',
  },
  avatar: {
    paddingLeft: '1rem',
  },
  ImageYrl: {},
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  nameStatus: {
    paddingLeft: '1rem',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  status: {
    fontSize: 14,
    alignSelf: 'flex-end',
  },
  serviceSpec: {
    paddingLeft: '2rem',
  },
  serviceSpecText: {},
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
