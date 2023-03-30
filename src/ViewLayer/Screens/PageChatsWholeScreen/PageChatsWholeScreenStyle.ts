import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const PageChatsWholeScreenStyle = StyleSheet.create({
  PageChatsWholeScreen: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 0,
    minHeight: '100%',
    height: '100%',
    width: '100%',
    marginLeft: '7.5%',
    marginRight: '7.5%',
  },
  sidebarRight: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    // @ts-ignore
    border: 'solid 1px',
  },
  mainColumn: {
    flex: 3,
    flexGrow: 3,
    flexDirection: 'column',
    height: '100%',
  },
  topBarMainColumn: {
    // @ts-ignore
    border: 'solid 1px',
  },
  contentMenuMainColumn: {
    borderTopWidth: 1,
  },
  chatSpace: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
})
