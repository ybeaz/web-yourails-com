import { StyleSheet } from 'react-native'
import { styleGlobal, getPx } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  TagProperty: {
    ...styleGlobal.typography,
    flex: 1,
    paddingLeft: getPx('0.5rem'),
    paddingRight: getPx('0.5rem'),
    paddingTop: getPx('0.25rem'),
    paddingBottom: getPx('0.25rem'),
    minWidth: 'auto',
    maxWidth: 'min-content',
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
    width: 'min-content',
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
    paddingBottom: getPx('1rem'),
    userSelect: 'text',
    cursor: 'text',
  },
})
