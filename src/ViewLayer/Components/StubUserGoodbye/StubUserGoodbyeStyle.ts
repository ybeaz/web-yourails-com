import { StyleSheet } from 'react-native'
import { StyleGlobal } from '../../Styles/StyleGlobal'

export const StubUserGoodbyeStyle = StyleSheet.create({
  StubUserGoodbye: {
    ...StyleGlobal.style,
    flex: 1,
    flexDirection: 'column',
    margin: 'auto',
    text: {
      flex: 1,
    },
  },
})
