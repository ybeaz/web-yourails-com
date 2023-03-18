import { StyleSheet } from 'react-native'
import { StyleGlobal } from '../../Styles/StyleGlobal'

export const TemplateStyle = StyleSheet.create({
  Template: {
    ...StyleGlobal.style,
    flex: 1,
    flexDirection: 'column',
    margin: 'auto',
  },
})
