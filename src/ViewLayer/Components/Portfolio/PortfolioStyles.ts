import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

const stylesDefault: any = {
  Portfolio: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
  buttonImageView: { paddingTop: getPx('0.5rem') },
  imageView: {},
  rowStyle: {
    flexDirection: 'column',
    padding: getPx('0.5rem'),
  },
  column1Style: {
    flex: 1,
  },
  column2Style: {
    flex: 5,
  },
  titleView: {},
  titleText: {
    ...styleGlobal.h3,
  },
  subtitleView: {},
  subtitleTextName: {
    paddingRight: getPx('0.5rem'),
    fontWeight: 'bold',
  },
  subtitleText: {},
  descriptionView: {},
  descriptionTextName: {
    paddingRight: getPx('0.5rem'),
    fontWeight: 'bold',
  },
  descriptionText: {},
  customerView: {},
  customerTextName: {
    paddingRight: getPx('0.5rem'),
    fontWeight: 'bold',
  },
  customerText: {},
  builtwithView: {},
  builtwithTextName: {
    paddingRight: getPx('0.5rem'),
    fontWeight: 'bold',
  },
  builtwithText: {},
}

const xsDevice = StyleSheet.create({
  ...stylesDefault,
  projectView: {
    flexDirection: 'column',
    paddingBottom: '2rem',
  },
  projectProfileView: { flex: 1, paddingBottom: getPx('1rem') },
})

const smDevice = StyleSheet.create({
  ...xsDevice,
})

const mdDevice = StyleSheet.create({
  ...xsDevice,
})

const lgDevice = StyleSheet.create({
  ...stylesDefault,
  projectView: {
    flexDirection: 'row',
    paddingBottom: '2rem',
  },
  projectProfileView: { flex: 1, paddingLeft: getPx('1rem') },
  rowStyle: {
    ...stylesDefault.rowStyle,
    flexDirection: 'row',
  },
})

const xlDevice = StyleSheet.create({
  ...lgDevice,
})

/**
 * @import import { styles } from './PortfolioStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
