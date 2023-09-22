import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

const stylesDefault: any = {
  Portfolio: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
  buttonImageView: { paddingTop: '0.5rem' },
  imageView: {},
  rowStyle: {
    flexDirection: 'column',
    padding: '0.5rem',
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
    paddingRight: '0.5rem',
    fontWeight: 'bold',
  },
  subtitleText: {},
  descriptionView: {},
  descriptionTextName: {
    paddingRight: '0.5rem',
    fontWeight: 'bold',
  },
  descriptionText: {},
  customerView: {},
  customerTextName: {
    paddingRight: '0.5rem',
    fontWeight: 'bold',
  },
  customerText: {},
  builtwithView: {},
  builtwithTextName: {
    paddingRight: '0.5rem',
    fontWeight: 'bold',
  },
  builtwithText: {},
}

const xsDevice = StyleSheet.create({
  ...stylesDefault,
  projectView: {
    flexDirection: 'column',
    paddingBottom: 32,
  },
  ProjectInfoView: { flex: 1, paddingBottom: 16 },
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
    paddingBottom: 32,
  },
  ProjectInfoView: { flex: 1, paddingLeft: 32 },
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
