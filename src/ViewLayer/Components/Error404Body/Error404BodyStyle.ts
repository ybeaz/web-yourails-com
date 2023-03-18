import { StyleSheet } from 'react-native'
import { StyleGlobal } from '../../Styles/StyleGlobal'

export const Error404BodyStyle = StyleSheet.create({
  Error404Body: {
    ...StyleGlobal.style,
    flex: 1,
    flexDirection: 'column',
    margin: 'auto',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  actions: {
    flex: 1,
    flexDirection: 'column',
  },
})
