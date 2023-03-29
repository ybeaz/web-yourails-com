import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import { TagsPropertiesType } from './TagsPropertiesType'
import { TagsPropertiesStyle as style } from './TagsPropertiesStyle'

/**
 * @import import { TagsProperties } from '../Components/TagsProperties/TagsProperties'
 */
const TagsPropertiesComponent: TagsPropertiesType = props => {
  const { styleProps = { TagsProperties: {} } } = props

  const propsOut = {}

  return (
    <SafeAreaView
      style={[style.TagsProperties, styleProps.TagsProperties]}
      testID='TagsProperties'
    >
      <View style={[style.viewPadding]} testID='viewPadding'>
        <Text>Good, Knowledgable, Reliable</Text>
      </View>
    </SafeAreaView>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
