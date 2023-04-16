import { StatusBar, StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  PageChatsWholeScreen: {
    ...styleGlobal.typography,
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100%',
    height: '100%',
    width: '100%',
  },
  sidebarRight: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    borderStyle: 'solid',
    // borderTopWidth: 1,
    // borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  mainColumn: {
    flex: 3,
    flexGrow: 3,
    flexDirection: 'column',
    height: '100%',
  },
  topBarsMainColumn: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    width: '100%',
  },
  topBarMainColumn: {
    borderStyle: 'solid',
    // borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  contentMenuMainColumn: {},
  chatSpace: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    // justifyContent: 'flex-end',
  },
  chatInput: {
    position: 'absolute',
    height: '4rem',
    bottom: 0,
    width: '100%',
    // zIndex: 9999,
  },
})

const xmDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...stylesDefault,
})

const mdDevice = StyleSheet.create({
  ...stylesDefault,
})

const lgDevice = StyleSheet.create({
  ...stylesDefault,
  PageChatsWholeScreen: {
    ...stylesDefault.PageChatsWholeScreen,
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  PageChatsWholeScreen: {
    ...stylesDefault.PageChatsWholeScreen,
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },
})

/**
 * @import import { styles } from './TemplateStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: smDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
