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
    paddingTop: '0.75rem',
  },
  leftColumnChatCardSpace: {
    flexDirection: 'column',
    flex: 1,
    overflow: 'scroll',
  },

  LayoutOfRow: {
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
    flex: 3,
    flexGrow: 3,
    flexDirection: 'column',
  },
  mainColumnTopBars: {},
  mainColumnTopBar: {},
  mainColumnContentMenu: {},
  scrollViewWrapper: {},
  chatSpace: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
  },
  chatInput: {
    height: '4rem',
    bottom: 0,
    width: '100%',
  },

  navigationBottom: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
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
  LayoutOfRow: {
    ...stylesDefault.LayoutOfRow,
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  LayoutOfRow: {
    ...stylesDefault.LayoutOfRow,
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
