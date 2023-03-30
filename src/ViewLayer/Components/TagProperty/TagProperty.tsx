import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { TagPropertyType } from './TagPropertyType'
import { TagPropertyStyle as style } from './TagPropertyStyle'

/**
 * @import import { TagProperty } from '../Components/TagProperty/TagProperty'
 */
const TagPropertyComponent: TagPropertyType = props => {
  const {
    styleProps = { TagProperty: {} },
    title,
    testID = 'TagProperty',
  } = props

  const propsOut = {}

  return (
    <View style={[style.TagProperty, styleProps.TagProperty]} testID={testID}>
      <Text style={[]}>{title}</Text>
    </View>
  )
}

export const TagProperty = React.memo(TagPropertyComponent)
