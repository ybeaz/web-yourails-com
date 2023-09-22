import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  CompetencyTags: {
    ...styleGlobal.typography,
    flex: 1,
    flexDirection: 'column',
    padding: '3rem',
    paddingBottom: '15rem',
  },
  headerView: {},
  headerText: {
    paddingLeft: '0.5rem',
    fontSize: 20,
    lineHight: '125%',
  },
  tagListWrapper: {
    paddingTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tagSubheading: {
    paddingLeft: '0.5rem',
    fontWeight: 'bold',
  },
  flatListContentContainerStyle: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  row: {
    flex: 1,
    flexDirection: 'column',
  },
})
