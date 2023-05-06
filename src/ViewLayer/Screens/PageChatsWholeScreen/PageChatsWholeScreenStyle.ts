import { StatusBar, StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  LayoutScreen: {
    ...styleGlobal.typography,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 0,
    flexDirection: 'column',
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100vh',
    maxWidth: '100%',
  },
  layoutNavigationTop: {
    display: 'flex',
    flexDirection: 'row',
    top: 0,
  },
  layoutMainContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  layoutNavigationBottom: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
  },

  leftColumn: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    borderStyle: 'solid',
    // borderTopWidth: 1,
    // borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  leftColumnTopBars: {
    // position: 'absolute',
    // zIndex: 9999,
    top: 0,
    width: '100%',
  },
  leftColumnChatCardSpace: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    overflow: 'scroll',
  },

  mainColumn: {
    flex: 3,
    flexGrow: 3,
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  mainColumnTopBars: {
    // position: 'absolute',
    // zIndex: 9999,
    // top: 0,
    width: '100%',
  },
  mainColumnTopBar: {},
  mainColumnContentMenu: {},
  scrollViewWrapper: {
    // justifyContent: 'flex-end',
    // height: '100%',
    // backgroundColor: 'red',
  },
  chatSpace: {
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    width: '100%',
    flex: 1,
  },
  chatInput: {
    // position: 'absolute',
    height: '4rem',
    bottom: 0,
    width: '100%',
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
    ...stylesDefault.LayoutScreen,
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  PageChatsWholeScreen: {
    ...stylesDefault.LayoutScreen,
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
