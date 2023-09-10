import { StyleSheet } from 'react-native'

export const stylesDefault = StyleSheet.create({
  navigationTop: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderStyle: 'solid',
    // borderTopWidth: 1,
    // borderRightWidth: 1,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
  },
  leftColumnTopBars: {
    display: 'flex',
    // flex: 1,
    paddingTop: '0.75rem',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  mainColumnTopBars: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  leftColumnChatCardSpace: {
    flexDirection: 'column',
    flex: 1,
    overflow: 'scroll',
  },

  layoutOfRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },

  mainContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  mainColumn: {
    display: 'flex',
    flex: 3,
    flexGrow: 3,
    flexDirection: 'column',
  },
  mainColumnTopBar: {},
  mainColumnContentMenu: {},
  scrollViewWrapper: {},
  chatSpace: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
  },
  chatInput: {
    height: '6rem',
    bottom: 0,
    width: '100%',
  },

  navigationBottom: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
})

const xsDevice = StyleSheet.create({
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
  layoutOfRow: {
    ...stylesDefault.layoutOfRow,
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  layoutOfRow: {
    ...stylesDefault.layoutOfRow,
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },
})

/**
 * @import import { styles } from './PageChatsWholeScreenStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
