import { StyleSheet } from 'react-native'
import '../../Styles/styleGlobal'

export const stylesDefault = StyleSheet.create({
  ChatInput: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '1rem'.getPx(),
  },
  inputButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  InputTextYrl: {
    borderRadius: '0.5rem'.getPx(),
    borderWidth: 1,
    alignItems: 'flex-end',
  },
  inputText: {
    borderRadius: '0.5rem'.getPx(),
    paddingRight: '2rem'.getPx(),
  },
  inputTextResize: {
    // @ts-expect-error
    resize: 'both',
  },
  ButtonYrl: {
    position: 'absolute',
    margin: 0,
    padding: '0.5rem'.getPx(),
    right: '1.25rem'.getPx(),
  },
  ButtonTitle: {
    fontSize: '1rem'.getPx(),
    fontWeight: '600',
  },
  buttonIconYrlWrapper: {
    position: 'absolute',
    paddingRight: '1rem'.getPx(),
    right: 0,
    top: '0.5rem'.getPx(),
  },
  tooltipsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    paddingLeft: '1rem'.getPx(),
    paddingBottom: '0.25rem'.getPx(),
  },
  tooltipTitleWrapper: {
    flexDirection: 'row',
  },
  tooltip_TooltipYrl: {},
  tooltip_container: {
    width: 'auto',
    height: 'auto',
    right: '1.25rem'.getPx(),
  },
  tooltip_iconTextWrapper: {
    maxHeight: 350,
    marginTop: '0.25rem'.getPx(),
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
