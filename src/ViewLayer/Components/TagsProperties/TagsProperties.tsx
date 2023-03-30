import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, View, FlatList, Text } from 'react-native'

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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

  type TagPropertyProps = { title: string }

  const TagProperty = ({ title }: TagPropertyProps) => (
    <View style={[]}>
      <Text style={[]}>{title}</Text>
    </View>
  )

  const propsOut = {}

  return (
    <SafeAreaView
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
    </SafeAreaView>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
