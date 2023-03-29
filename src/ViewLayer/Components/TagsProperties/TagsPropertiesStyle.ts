import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TagsPropertiesStyle = StyleSheet.create({
  TagsProperties: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
  },
  viewPadding: {
    padding: '3rem',
  },
})
