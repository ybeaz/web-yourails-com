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
})
