import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TemplateScreenStyle = StyleSheet.create({
  templateScreen: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    margin: 'auto',
  },
})
