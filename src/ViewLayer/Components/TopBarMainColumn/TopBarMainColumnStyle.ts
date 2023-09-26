import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  TopBarMainColumn: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    paddingTop: '0.5rem'.getPx(),
    paddingBottom: '0.5rem'.getPx(),
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  buttonBackToCardsWrapper: {
    paddingLeft: '1.5rem'.getPx(),
  },
  avatar: {
    paddingLeft: '1rem'.getPx(),
  },
  ImageYrl: {},
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  nameStatus: {
    paddingLeft: '1rem'.getPx(),
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
    paddingLeft: '2rem'.getPx(),
  },
  serviceSpecText: {},
})

const xsDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...xsDevice,
})

const mdDevice = StyleSheet.create({
  ...xsDevice,
})

const lgDevice = StyleSheet.create({
  ...xsDevice,
})

const xlDevice = StyleSheet.create({
  ...xsDevice,
})

/**
 * @import import { styles } from './TemplateStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
