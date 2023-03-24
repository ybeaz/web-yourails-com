import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const PageChatsWholeScreenStyle = StyleSheet.create({
  PageChatsWholeScreen: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '0 auto',
    minHeight: '100%',
    height: '100%',
    width: '100%',
    marginLeft: '7.5%',
    marginRight: '7.5%',
    border: 'solid 1px',
  },
  sidebarRight: {
    flex: 1,
    width: '30rem',
    height: '100%',
    flexDirection: 'column',
    border: 'solid 1px',
  },
  mainColumn: {
    flex: 2,
    flexGrow: 2,
    flexDirection: 'column',
    height: '100%',
  },
  topBarMainColumn: {},
  chatSpace: {
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  date: {
    alignItems: 'center',
    padding: '1rem',
  },
  dateText: {
    width: 'fit-content',
  },
  messages: {
    padding: '1rem',
  },
  chatInput: {},
})
