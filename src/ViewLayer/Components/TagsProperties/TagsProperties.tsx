import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, FlatList, Text } from 'react-native'

import {
  getCompetencyTagsR1,
  CompetencyTagsObj,
} from '../../../r1Content/getCompetencyTagsR1'
import { TagsPropertiesType } from './TagsPropertiesType'
import { TagsPropertiesStyle as style } from './TagsPropertiesStyle'

/**
 * @import import { TagsProperties } from '../Components/TagsProperties/TagsProperties'
 */
const TagsPropertiesComponent: TagsPropertiesType = props => {
  const { styleProps = { TagsProperties: {} } } = props

  const competencyTagsR1: CompetencyTagsObj = getCompetencyTagsR1()

  console.info('TagsProperties [21]', {
    competencyTagsR1,
  })

  type TagPropertyProps = { title: string }

  const TagProperty = ({ title }: TagPropertyProps) => (
    <View style={[]}>
      <Text style={[]}>{title}</Text>
    </View>
  )

  const propsOut = {}

  return (
    <View
      style={[style.TagsProperties, styleProps.TagsProperties]}
      testID='TagsProperties'
    >
      <View style={[style.viewPadding]} testID='viewPadding'>
        <FlatList
          data={competencyTagsR1['general']}
          renderItem={({ item }) => <TagProperty title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
