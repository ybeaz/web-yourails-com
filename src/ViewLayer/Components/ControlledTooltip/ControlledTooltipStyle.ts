import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/StyleGlobal'

export const style = StyleSheet.create({
  ControlledTooltip: {
    ...styleGlobal.typography,
    flexDirection: 'column',
  },
  viewPadding: {
    padding: '1rem',
  },
})
