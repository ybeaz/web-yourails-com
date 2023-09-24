import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  TopBarMainColumn: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    paddingTop: getPx('0.5rem'),
    paddingBottom: getPx('0.5rem'),
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  buttonBackToCardsWrapper: {
    paddingLeft: getPx('1.5rem'),
  },
  avatar: {
    paddingLeft: getPx('1rem'),
  },
  ImageYrl: {},
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  nameStatus: {
    paddingLeft: getPx('1rem'),
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
    paddingLeft: getPx('2rem'),
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
