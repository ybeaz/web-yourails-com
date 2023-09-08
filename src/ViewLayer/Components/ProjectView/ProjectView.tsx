import React from 'react'
import { ImageResizeMode, View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import {
  ButtonYrl,
  ImageYrl,
  useLinkClickResYrl,
} from '../../../YrlNativeViewLibrary'
import { ProjectInfoView } from '../ProjectInfoView/ProjectInfoView'
import { ProjectViewType } from './ProjectViewTypes'
import { styles } from './ProjectViewStyles'

/**
 * @import import { ProjectView } from '../Components/ProjectView/ProjectView'
 */
const ProjectViewComponent: ProjectViewType = props => {
  const {
    styleProps = { ProjectView: {} },
    mediaParams = mediaParamsDefault,
    title,
    subtitle,
    description,
    customer,
    builtwith,
    imgSrc,
    linkHref,
    imageWidth,
    imageHeight,
    index,
    elementWidth,
  } = props
  const { deviceType, screenCase } = mediaParams
  const style = styles[deviceType]

  const imageResizeMode: ImageResizeMode = 'cover' // 'cover' 'contain' 'center'

  const propsOut: Record<string, any> = {
    projectButtonYrl: {
      styleProps: {
        ButtonYrl: { justifyContent: 'flex-start' },
        title: {},
      },
      titleText: '',
      testID: 'projectButtonYrl',
      disabled: false,
      onPress: useLinkClickResYrl(linkHref),
    },
    projectImageYrlProps: {
      styleProps: {
        ImageYrl: {},
        image: {
          borderRadius: 3,
          width: imageWidth,
          height: imageHeight,
        },
      },
      testID: `projectImageYrl-${index}`,
      uri: imgSrc,
      resizeMode: imageResizeMode,
    },
    projectInfoViewProps: {
      title,
      subtitle,
      description,
      customer,
      builtwith,
    },
  }

  const elementLayoutCase = elementWidth < 1024 ? 'xsSmMd' : 'lgXl'
  const addProjectViewStyle =
    elementWidth < 1024 ? { flexDirection: 'column' } : {}

  return (
    <View
      style={[style.ProjectView, styleProps.ProjectView, addProjectViewStyle]}
      testID='ProjectView'
    >
      {elementLayoutCase === 'xsSmMd' && (
        <ProjectInfoView {...propsOut.projectInfoViewProps} />
      )}
      <View style={[style.buttonImageView]} testID='buttonImageView'>
        <ButtonYrl {...propsOut.projectButtonYrl}>
          <View style={[style.imageView]} testID='imageView'>
            <ImageYrl {...propsOut.projectImageYrlProps} />
          </View>
        </ButtonYrl>
      </View>
      {elementLayoutCase === 'lgXl' && (
        <ProjectInfoView {...propsOut.projectInfoViewProps} />
      )}
    </View>
  )
}

export const ProjectView = withParamsMediaYrl(React.memo(ProjectViewComponent))
