import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

const PortfolioStyleDefault: any = {
  Portfolio: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
  buttonImageView: { paddingTop: '0.5rem' },
  imageView: {
    // height: '100%',
    // width: '100%',
    // height: '16.8rem',
  },
  rowStyle: {
    flexDirection: 'row',
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
    ...styleGlobal.h2,
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

const lgDevice = StyleSheet.create({
  ...PortfolioStyleDefault,
  projectView: {
    flexDirection: 'row',
    paddingBottom: '2rem',
  },
  projectProfileView: { flex: 1, paddingLeft: '1rem' },
})

const smDevice = StyleSheet.create({
  ...PortfolioStyleDefault,
  projectView: {
    flexDirection: 'column',
    paddingBottom: '2rem',
  },
  projectProfileView: { flex: 1, paddingBottom: '1rem' },
})

/**
 * @import import { themes } from '../Styles/themes'
 */
export const PortfolioStyles = {
  xsDevice: smDevice,
  smDevice: smDevice,
  mdDevice: smDevice,
  lgDevice: lgDevice,
  xlDevice: lgDevice,
}
