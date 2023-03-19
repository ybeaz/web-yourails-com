import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TemplateStyle = StyleSheet.create({
  Template: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    margin: 'auto',
  },
})
