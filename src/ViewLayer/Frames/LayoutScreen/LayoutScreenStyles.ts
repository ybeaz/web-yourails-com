import { StatusBar, StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  LayoutScreen: {
    ...styleGlobal.typography,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 0,
    flexDirection: 'column',
    maxHeight: '100%',
    width: '100%',
  },
  layoutScreenHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,

    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  layoutScreenBody: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0,

    flex: 1,
    flexDirection: 'row',
    width: '100%',
    maxHeight: '100%',
  },
  layoutScreenFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,

    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 'auto',
  },
})

/**
 * @import import { styles } from './LayoutScreenStyles'
 */
export const style = stylesDefault
