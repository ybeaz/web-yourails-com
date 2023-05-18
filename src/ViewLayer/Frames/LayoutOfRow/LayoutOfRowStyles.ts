import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  LayoutOfRow: {
    ...styleGlobal.typography,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  mainColumn: {
    display: 'flex',
    flex: 3,
    flexGrow: 3,
    flexDirection: 'column',
  },
})

/**
 * @import import { styles } from './LayoutOfRowStyles'
 */
export const style: Record<string, any> = stylesDefault
