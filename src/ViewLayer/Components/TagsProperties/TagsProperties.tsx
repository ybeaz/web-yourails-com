import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import {
  CompetencyTagType,
  CompetencyTagsObjType,
} from '../../../@types/CompetencyTagType'
import { getSectionsFromTagsCompetencies } from '../../../Shared/getSectionsFromTagsCompetencies'
import { COMPETENCY_TAGS_SUBHEADING_R1_DICT } from '../../../Constants/competencyTagsSubheading.cont'
import { competencyTags2 } from '../../../ContentMock/competencyTagsMock2'
import { competencyTags } from '../../../ContentMock/competencyTagsMock'
import { Header } from '../Header/Header'
import { Text } from '../../Components/Text/Text'
import { TagProperty } from '../TagProperty/TagProperty'
import { TagsPropertiesType } from './TagsPropertiesType'
import { style } from './TagsPropertiesStyle'

/**
 * @import import { TagsProperties } from '../Components/TagsProperties/TagsProperties'
 */
const TagsPropertiesComponent: TagsPropertiesType = props => {
  const { styleProps = { TagsProperties: {} } } = props

  const competencyTags2Keys: Array<keyof CompetencyTagsObjType> = Object.keys(
    competencyTags2
  ) as Array<keyof CompetencyTagsObjType>

  const competencyTagsKeys = getSectionsFromTagsCompetencies(competencyTags)
  console.info('TagsProperties [30]', { competencyTagsKeys })
  // TODO: Stopped here getSectionsFromTagsCompetencies

  const getTagList = (competencies: any[]): ReactElement[] => {
    return competencies.map((competency, index: number) => {
      const { id, title, linkHref, tooltips } = competency
      const tagPropertyProps = {
        key: `tagProperty-${index}`,
        title,
        linkHref,
        tooltips,
        testID: 'TagsProperties_item',
      }
      return <TagProperty {...tagPropertyProps} />
    })
  }

  // TODO
  // const competencyTags2sx = competencyTagsKeys.map(
  //   (tagSubheading: string, index: number) => {

  //     return (
  //       <View
  //         key={`competencyTags-${index}`}
  //         style={[style.tagListWrapper]}
  //         testID='tagListWrapper'
  //       >
  //         <Text style={[style.tagSubheading]} testID='tagSubheadingText'>
  //           {`${tagSubheading}:`}
  //         </Text>
  //         {getTagList(competencyTagsGroup)}
  //       </View>
  //     )
  //   }
  // )

  const competencyTags2Jsx = competencyTags2Keys.map(
    (key: keyof CompetencyTagsObjType, index: number) => {
      const competencyTagsGroup: CompetencyTagType[] = competencyTags2[
        key
      ] as CompetencyTagType[]

      const tagSubheading = COMPETENCY_TAGS_SUBHEADING_R1_DICT[key]

      return (
        <View
          key={`competencyTags-${index}`}
          style={[style.tagListWrapper]}
          testID='tagListWrapper'
        >
          <Text style={[style.tagSubheading]} testID='tagSubheadingText'>
            {tagSubheading + ':'}
          </Text>
          {getTagList(competencyTagsGroup)}
        </View>
      )
    }
  )

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
      style={[style.TagsProperties, styleProps.TagsProperties]}
      testID='TagsProperties'
    >
      <Header {...propsOut.headerProps} />
      {competencyTags2Jsx}
    </View>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
