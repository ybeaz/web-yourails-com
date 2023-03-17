import { StyleSheet } from 'react-native'
import { StyleGlobal } from '../../Styles/StyleGlobal'

export const PageChatsWholeScreenStyle = StyleSheet.create({
  PageChatsWholeScreen: {
    ...StyleGlobal.style,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    sidebarRight: {
      width: '30rem',
      height: '100%',
      border: 'solid 1px black',
      backgroundColor: 'blue',
    },
    mainColumn: {
      flex: 2,
      flexGrow: 2,
      height: '100%',
      border: 'solid 1px black',
    },
  },
})
