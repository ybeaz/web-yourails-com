import { StatusBar, StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  LayoutScreen: {
    ...styleGlobal.typography,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 0,
    flexDirection: 'column',
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100vh',
    width: '100vw',
  },
  layoutNavigationTop: {
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    width: '100vw',
  },
  layoutMainContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: '100vw',
  },
  layoutNavigationBottom: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    marginTop: 'auto',
  },
})

/**
 * @import import { styles } from './LayoutScreenStyles'
 */
export const style = stylesDefault
