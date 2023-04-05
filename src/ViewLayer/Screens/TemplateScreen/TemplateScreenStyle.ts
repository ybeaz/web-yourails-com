import { StatusBar, StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  templateScreen: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
})
