import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const PortfolioStyle = StyleSheet.create({
  Portfolio: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
  projectView: {
    flexDirection: 'row',
    paddingBottom: '2rem',
  },
  imageView: {
    flex: 1,
  },
  projectProfileView: { flex: 1 },
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
    padding: '1rem',
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
})
