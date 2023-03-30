import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, FlatList, Text } from 'react-native'

import {
  getCompetencyTagsR1,
  CompetencyTagsObj,
} from '../../../r1Content/getCompetencyTagsR1'
import { TagProperty } from '../TagProperty/TagProperty'
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

  const propsOut = {
    tagPropertyProps: {},
  }

  return (
    <View
      style={[style.TagsProperties, styleProps.TagsProperties]}
      testID='TagsProperties'
    >
      <View style={[style.viewPadding]} testID='viewPadding'>
        <FlatList
          horizontal={true}
          data={competencyTagsR1['general']}
          renderItem={({ item }) => {
            const tagPropertyProps = {
              title: item.title,
              testID: 'TagsProperties_item',
            }
            return <TagProperty {...tagPropertyProps} />
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
