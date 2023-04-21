import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

const stylesDefault: any = {
  ProjectView: {
    ...styleGlobal.typography,
  },
  buttonImageView: { paddingTop: '0.5rem' },
  imageView: {
    // height: '100%',
    // width: '100%',
    // height: '16.8rem',
  },
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
  titleView: {
    // padding: '1rem',
  },
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

const xmDevice = StyleSheet.create({
  ...stylesDefault,
  ProjectView: {
    flexDirection: 'column',
    paddingBottom: '2.2rem',
  },
  projectProfileView: { flex: 1, paddingBottom: '1rem' },
})

const smDevice = StyleSheet.create({
  ...xmDevice,
})

const mdDevice = StyleSheet.create({
  ...xmDevice,
})

const lgDevice = StyleSheet.create({
  ...stylesDefault,
  ProjectView: {
    flexDirection: 'row',
    paddingBottom: '2rem',
  },
  projectProfileView: { flex: 1, paddingLeft: '1rem' },
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
  xsDevice: smDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
