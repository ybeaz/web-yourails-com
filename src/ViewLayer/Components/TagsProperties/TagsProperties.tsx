import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import {
  getCompetencyTagsR1,
  CompetencyTagsObjType,
  CompetencyType,
  getTranslatedPropNamesToSubheadings,
} from '../../../r1Content/getCompetencyTagsR1'
import { Text } from '../../Components/Text/Text'
import { TagProperty } from '../TagProperty/TagProperty'
import { TagsPropertiesType } from './TagsPropertiesType'
import { style } from './TagsPropertiesStyle'

/**
 * @import import { TagsProperties } from '../Components/TagsProperties/TagsProperties'
 */
const TagsPropertiesComponent: TagsPropertiesType = props => {
  const { styleProps = { TagsProperties: {} } } = props

  const competencyTagsR1: CompetencyTagsObjType = getCompetencyTagsR1()

  const competencyTagsR1Keys: Array<keyof CompetencyTagsObjType> = Object.keys(
    competencyTagsR1
  ) as Array<keyof CompetencyTagsObjType>

  const getTagList = (competencies: any[]): ReactElement[] => {
    return competencies.map((competency, index: number) => {
      const { id, title, linkHref, tooltips } = competency
      const tagPropertyProps = {
        key: `tagProperty-${index}`,
        id,
        title,
        linkHref,
        tooltips,
        testID: 'TagsProperties_item',
      }
      return <TagProperty {...tagPropertyProps} />
    })
  }

  const competencyTagsR1Jsx = competencyTagsR1Keys.map(
    (key: keyof CompetencyTagsObjType, index: number) => {
      const competencyTagsGroup: CompetencyType[] = competencyTagsR1[
        key
      ] as CompetencyType[]

      const tagSubheading = getTranslatedPropNamesToSubheadings(key)

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

  const propsOut = {
    tagPropertyProps: {},
  }

  return (
    <View
      style={[style.TagsProperties, styleProps.TagsProperties]}
      testID='TagsProperties'
    >
      <View style={[style.headerView]} testID='headerView'>
        <Text style={[style.headerText]} testID='headerText'>
          Competency Tags
        </Text>
      </View>
      {competencyTagsR1Jsx}
    </View>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
