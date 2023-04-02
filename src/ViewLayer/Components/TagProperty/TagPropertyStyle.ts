import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TagPropertyStyle = StyleSheet.create({
  TagProperty: {
    ...styleGlobal.typography,
    flex: 1,
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    minWidth: 'auto',
    maxWidth: 'min-content',
    // flexWrap: 'wrap',
    // whiteSpace: 'nowrap',
  },
  titleText: {
    fontSize: 20,
    width: 'min-content',
    whiteSpace: 'nowrap',
  },
  tooltip_container: {
    width: 'auto',
    height: 'auto',
  },
  tooltip_containerView: {
    maxHeight: 200,
  },
  tooltip_scrollView: {
    marginHorizontal: 20,
  },
  tooltip_buttonYrlLinking: {},
  tooltip_textRrneui: {},
})