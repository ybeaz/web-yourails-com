import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  TagProperty: {
    ...styleGlobal.typography,
    // flex: 1,
    paddingLeft: '0.5rem'.getPx(),
    paddingRight: '0.5rem'.getPx(),
    paddingTop: '0.25rem'.getPx(),
    paddingBottom: '0.25rem'.getPx(),
    // minWidth: '100%',
    // maxWidth: '100%',
    // flexWrap: 'wrap',
    // whiteSpace: 'nowrap',
  },
  tagIconTextWrapper: {
    flexDirection: 'row',
  },
  titleText: {
    display: 'flex',
    flex: 1,
    fontSize: 20,
    // width: '100%',
    whiteSpace: 'nowrap',
  },
  tooltip_container: {
    width: 'auto',
    height: 'auto',
  },
  tooltip_containerView: {
    maxHeight: 350,
  },
  tooltip_scrollView: {
    marginHorizontal: 20,
  },
  tooltip_buttonYrlLinking: {},
  tooltipsText: {
    paddingBottom: '1rem'.getPx(),
    userSelect: 'text',
    cursor: 'text',
  },
})
