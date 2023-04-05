import { StatusBar, StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  PageChatsWholeScreen: {
    ...styleGlobal.typography,
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
