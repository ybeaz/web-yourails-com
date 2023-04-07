import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { Text } from '../../Components/Text/Text'
import { ProjectInfoViewType } from './ProjectInfoViewTypes'
import { styles } from './ProjectInfoViewStyles'

/**
 * @import import { ProjectInfoView } from '../Components/ProjectInfoView/ProjectInfoView'
 */
const ProjectInfoViewComponent: ProjectInfoViewType = props => {
  const {
    styleProps = { ProjectInfoView: {} },
    mediaParams = mediaParamsDefault,
    title,
    subtitle,
    description,
    customer,
    builtwith,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: Record<string, any> = {}

  return (
    <View style={[style.ProjectInfoView]} testID='ProjectInfoView'>
      <View style={[style.titleView, style.rowStyle]} testID='titleView'>
        <Text style={[style.titleText]} testID='titleText'>
          {title}
        </Text>
      </View>
      <View style={[style.subtitleView, style.rowStyle]} testID='subtitleView'>
        <Text
          style={[style.subtitleTextName, style.column1Style]}
          testID='subtitleTextName'
        >
          Subtitle:
        </Text>
        <Text
          style={[style.subtitleText, style.column2Style]}
          testID='subtitleTex'
        >
          {subtitle}
        </Text>
      </View>
      <View
        style={[style.descriptionView, style.rowStyle]}
        testID='descriptionView'
      >
        <Text
          style={[style.descriptionTextName, style.column1Style]}
          testID='subtitleTextName'
        >
          Description:
        </Text>
        <Text
          style={[style.descriptionText, style.column2Style]}
          testID='descriptionText'
        >
          {description}
        </Text>
      </View>
      <View style={[style.customerView, style.rowStyle]} testID='customerView'>
        <Text
          style={[style.customerTextName, style.column1Style]}
          testID='customerTextName'
        >
          Industry:
        </Text>
        <Text
          style={[style.customerText, style.column2Style]}
          testID='customerText'
        >
          {customer}
        </Text>
      </View>
      <View
        style={[style.builtwithView, style.rowStyle]}
        testID='builtwithView'
      >
        <Text
          style={[style.builtwithTextName, style.column1Style]}
          testID='subtitleTextName'
        >
          Built with:
        </Text>
        <Text
          style={[style.builtwithText, style.column2Style]}
          testID='builtwithText'
        >
          {builtwith}
        </Text>
      </View>
    </View>
  )
}

export const ProjectInfoView = React.memo(
  withDeviceType(ProjectInfoViewComponent)
)
