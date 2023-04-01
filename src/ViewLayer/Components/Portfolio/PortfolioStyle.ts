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
})
