import { StyleSheet } from 'react-native'
import { getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  chatCardsHeader: {
    display: 'flex',
    // flex: 1,
    paddingTop: getPx('0.75rem'),
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  chatCardsBody: {
    flexDirection: 'column',
    flex: 1,
    overflow: 'scroll',
  },
  chatSpaceHeader: {},
  chatSpaceBody: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  chatSpaceFooter: {
    height: getPx('6rem'),
    bottom: 0,
    width: '100%',
  },

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
  mainColumnTopBars: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
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
