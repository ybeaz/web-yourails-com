import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const TagsPropertiesStyle = StyleSheet.create({
  TagsProperties: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '2rem',
  },
  headerView: {},
  headerText: {
    paddingLeft: '0.5rem',
    fontSize: 20,
    lineHight: '125%',
  },
  tagListWrapper: {
    paddingTop: '1rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flatListWrapper: {
    padding: '2rem',
    // flexShrink: 1,
  },
  flatList: {
    // flexWrap: 'wrap',
  },
  flatListContentContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  row: {
    flex: 1,
    flexDirection: 'column',
  },
})
