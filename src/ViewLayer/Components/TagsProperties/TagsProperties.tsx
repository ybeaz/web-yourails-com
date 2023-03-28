import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, Text } from 'react-native'

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
      <Text>Good, Knowledgable, Reliable</Text>
    </SafeAreaView>
  )
}

export const TagsProperties = React.memo(TagsPropertiesComponent)
