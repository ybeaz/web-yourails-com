import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const ProfileStyle = StyleSheet.create({
  Profile: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    // height: '100%',
  },
})
