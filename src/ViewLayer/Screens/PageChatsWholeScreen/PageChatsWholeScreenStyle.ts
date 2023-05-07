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
    // height: '100%',
    flexDirection: 'column',
    borderStyle: 'solid',
    // borderTopWidth: 1,
    // borderRightWidth: 1,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
  },
  leftColumnTopBars: {
    // position: 'absolute',
    // zIndex: 9999,
    paddingTop: '0.35rem',
    // width: '100%',
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
    // width: '100wv',
    // height: '100vh',
  },
  mainColumnTopBars: {
    // position: 'absolute',
    // zIndex: 9999,
    // top: 0,
    // width: '100%',
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
  // navigationTop: {
  //   ...stylesDefault.navigationTop,
  //   marginRight: '7.5%',
  //   marginLeft: '7.5%',
  // },
  // mainContent: {
  //   ...stylesDefault.navigationTop,
  //   marginRight: '7.5%',
  //   marginLeft: '7.5%',
  // },
  // navigationBottom: {
  //   ...stylesDefault.navigationTop,
  //   marginRight: '7.5%',
  //   marginLeft: '7.5%',
  // },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  LayoutOfRow: {
    ...stylesDefault.LayoutOfRow,
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },

  // navigationTop: {
  //   ...stylesDefault.navigationTop,
  //   marginRight: '7.5%',
  //   marginLeft: '7.5%',
  // },
  // mainContent: {
  //   ...stylesDefault.navigationTop,
  //   marginRight: '7.5%',
  //   marginLeft: '7.5%',
  // },
  // navigationBottom: {
  //   ...stylesDefault.navigationTop,
  //   marginRight: '7.5%',
  //   marginLeft: '7.5%',
  // },
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
