import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const MessageStyle = StyleSheet.create({
  Message: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    margin: 'auto',
  },
})
