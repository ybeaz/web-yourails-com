import { StyleSheet } from 'react-native'

export const stylesDefault = StyleSheet.create({
  ChatInput: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: 16,
  },
  inputButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  InputTextYrl: {
    borderRadius: 10,
    borderWidth: 1,
  },
  inputText: {
    borderRadius: 10,
    width: '80vw',
    paddingRight: 32,
  },
  inputTextResize: {
    maxWidth: '80vw',
    maxHeight: '75vh',
    resize: 'both',
  },
  ButtonYrl: {
    position: 'absolute',
    margin: 0,
    padding: '10px',
    right: 20,
  },
  ButtonTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  iconYrlWrapper: {
    position: 'absolute',
    paddingRight: 16,
    right: 0,
    top: '0.5rem',
  },
  tooltipsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    paddingLeft: 16,
    paddingBottom: '0.3rem',
  },
  tooltipTitleWrapper: {
    flexDirection: 'row',
  },
  tooltip_TooltipYrl: {},
  tooltip_container: {
    width: 'auto',
    height: 'auto',
    right: 20,
  },
  tooltip_iconTextWrapper: {
    maxHeight: 350,
    marginTop: '0.20rem',
  },
  tooltip_titleText: {},
  tooltip_tooltipPopover: {
    width: '100%;',
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
    width: '50vw',
  },
  inputTextResize: {
    borderRadius: 10,
    maxWidth: '50vw',
    maxHeight: '75vh',
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
