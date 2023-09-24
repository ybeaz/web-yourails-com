import { StyleSheet } from 'react-native'
import { getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  chatCardsHeader: {
    display: 'flex',
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
    marginRight: '7.5%',
    marginLeft: '7.5%',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  layoutOfRow: {
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
