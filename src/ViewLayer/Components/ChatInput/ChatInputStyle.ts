import { StyleSheet } from 'react-native'
import { getPx } from '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  ChatInput: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: getPx('1rem'),
  },
  inputButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  InputTextYrl: {
    borderRadius: getPx('0.5rem'),
    borderWidth: 1,
  },
  inputText: {
    borderRadius: getPx('0.5rem'),
    paddingRight: getPx('2rem'),
  },
  inputTextResize: {
    // @ts-expect-error
    resize: 'both',
  },
  ButtonYrl: {
    position: 'absolute',
    margin: 0,
    padding: getPx('0.5rem'),
    right: getPx('1.25rem'),
  },
  ButtonTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  iconYrlWrapper: {
    position: 'absolute',
    paddingRight: getPx('1rem'),
    right: 0,
    top: getPx('0.5rem'),
  },
  tooltipsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    paddingLeft: getPx('1rem'),
    paddingBottom: getPx('0.25rem'),
  },
  tooltipTitleWrapper: {
    flexDirection: 'row',
  },
  tooltip_TooltipYrl: {},
  tooltip_container: {
    width: 'auto',
    height: 'auto',
    right: getPx('1.25rem'),
  },
  tooltip_iconTextWrapper: {
    maxHeight: 350,
    marginTop: getPx('0.25rem'),
  },
  tooltip_titleText: {},
  tooltip_tooltipPopover: {
    width: '100%',
  },
  helpTooltipsText: {
    // @ts-expect-error
    userSelect: 'text',
    cursor: 'text',
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
  inputText: {
    borderRadius: 10,
    width: '50%',
  },
  inputTextResize: {
    borderRadius: 10,
    maxWidth: '50%',
    maxHeight: '75%',
    resize: 'both',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  ...lgDevice,
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
