import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const PageChatsWholeScreenStyle = StyleSheet.create({
  PageChatsWholeScreen: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sidebarRight: {
    width: '30rem',
    height: '100%',
    backgroundColor: 'blue',
  },
  mainColumn: {
    padding: '0rem',
    flex: 2,
    flexGrow: 2,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    flexDirection: 'column',
  },
})
