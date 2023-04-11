import React, { ReactElement } from 'react'
import { View } from 'react-native'

import { withStoreState } from '../../Hooks/withStoreState'
import { CompetencyTagType } from '../../../@types/CompetencyTagType'
import { getSectionsFromTagsCompetencies } from '../../../Shared/getSectionsFromTagsCompetencies'
import { Header } from '../Header/Header'
import { Text } from '../../Components/Text/Text'
import { TagProperty } from '../TagProperty/TagProperty'
import { CompetencyTagsType } from './CompetencyTagsType'
import { style } from './CompetencyTagsStyle'

import { competencyTags } from '../../../ContentMock/competencyTagsMock'

/**
 * @import import { CompetencyTags } from '../Components/CompetencyTags/CompetencyTags'
 */
const CompetencyTagsComponent: CompetencyTagsType = props => {
  const { styleProps = { CompetencyTags: {} }, store } = props

  // const store = useSelector((store2: RootStoreType) => store2)
  const {
    globalVars: { idUserHost },
  } = store

  const tagSubheadings = getSectionsFromTagsCompetencies(competencyTags)

  const getTagList = (competencies: CompetencyTagType[]): ReactElement[] => {
    return competencies.map((competency, index: number) => {
      const { title, linkHref, tooltips } = competency
      const tagPropertyProps = {
        key: `tagProperty-${index}`,
        title,
        linkHref,
        tooltips,
        testID: 'CompetencyTags_item',
      }
      return <TagProperty {...tagPropertyProps} />
    })
  }

  const getCompetencyTagsJsx = (competencyTagsIn: CompetencyTagType[]) => {
    const sections = getSectionsFromTagsCompetencies(competencyTagsIn)

    return sections.map((section: string, index: number) => {
      const competencyTagsFiltered = competencyTagsIn.filter(
        (competencyTag: CompetencyTagType) => competencyTag.section === section
      )

      return (
        <View
          key={`competencyTags-${index}`}
          style={[style.tagListWrapper]}
          testID='tagListWrapper'
        >
          <Text style={[style.tagSubheading]} testID='tagSubheadingText'>
            {`${section}: `}
          </Text>
          {getTagList(competencyTagsFiltered)}
        </View>
      )
    })
  }

  const propsOut: Record<string, any> = {
    tagPropertyProps: {},
    headerProps: {
      styleProps: {
        Header: { paddingBottom: '1rem' },
        headerText: {},
      },
      mediaParams: { deviceType: '' },
      headerText: 'Competency Tags',
    },
  }

  return (
    <View
      style={[style.CompetencyTags, styleProps.CompetencyTags]}
      testID='CompetencyTags'
    >
      <Header {...propsOut.headerProps} />
      {getCompetencyTagsJsx(competencyTags)}
    </View>
  )
}

export const CompetencyTags = React.memo(
  withStoreState(CompetencyTagsComponent)
)
