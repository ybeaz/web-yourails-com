import React, { useCallback, ReactElement } from 'react'
import { ImageResizeMode, View, Linking, Alert } from 'react-native'
import '@expo/match-media'

import { Header } from '../Header/Header'
import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { useLinkClickRes } from '../../Hooks/useLinkClickRes'
import { getImageSizesFor1of2Columns } from '../../../Shared/getImageSizesFor1of2Columns'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { styles } from './PortfolioStyles'
import { PortfolioType } from './PortfolioTypes'
import { Text } from '../../Components/Text/Text'

import { getProjectList, ProjectType } from '../../../r1Content/r1Projects'

/**
 * @import import { Portfolio } from '../Components/Portfolio/Portfolio'
 */
const PortfolioComponent: PortfolioType = props => {
  const { styleProps = { Portfolio: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const { imageWidth, imageHeight } = getImageSizesFor1of2Columns(
    screenCase,
    width
  )

  const projectsList: ProjectType[] = getProjectList()
  const getProjects = (projectsList: ProjectType[]): ReactElement[] => {
    return projectsList
      .filter((project: ProjectType) => project.isActive === true)
      .map((project: ProjectType, index: number) => {
        const {
          title,
          isActive,
          pathname,
          subtitle,
          description,
          customer,
          builtwith,
          imgSrc,
          linkHref,
        } = project

        const imageResizeMode: ImageResizeMode = 'cover' // 'cover' 'contain' 'center'

        const propsOut = {
          projectButtonYrl: {
            styleProps: {
              ButtonYrl: { justifyContent: 'flex-start' },
              title: {},
            },
            titleText: '',
            testID: 'projectButtonYrl',
            disabled: false,
            onPress: useLinkClickRes(linkHref),
          },
          projectImageYrlProps: {
            styleProps: {
              ImageYrl: {},
              image: {
                width: imageWidth,
                height: imageHeight,
              },
            },
            // onLayout: onImageLayout,
            testID: `projectImageYrl-${index}`,
            uri: imgSrc,
            resizeMode: imageResizeMode,
          },
        }

        const ProjectProfileView = () => (
          <View style={[style.projectProfileView]} testID='projectProfileView'>
            <View style={[style.titleView, style.rowStyle]} testID='titleView'>
              <Text style={[style.titleText]} testID='titleText'>
                {title}
              </Text>
            </View>
            <View
              style={[style.subtitleView, style.rowStyle]}
              testID='subtitleView'
            >
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
            <View
              style={[style.customerView, style.rowStyle]}
              testID='customerView'
            >
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

        return (
          <View
            key={`project-${index}`}
            style={[style.projectView]}
            testID='projectView'
          >
            {screenCase === 'xsSmMd' && <ProjectProfileView />}
            <View style={[style.buttonImageView]} testID='buttonImageView'>
              <ButtonYrl {...propsOut.projectButtonYrl}>
                <View style={[style.imageView]} testID='imageView'>
                  <ImageYrl {...propsOut.projectImageYrlProps} />
                </View>
              </ButtonYrl>
            </View>
            {screenCase === 'lgXl' && <ProjectProfileView />}
          </View>
        )
      })
  }

  const propsOut: Record<string, any> = {
    headerProps: {
      styleProps: {
        Header: { paddingBottom: '1.5rem' },
        headerText: {},
      },
      mediaParams: { deviceType: '' },
      headerText: 'Projects & widgets',
    },
  }

  return (
    <View style={[style.Portfolio, styleProps.Portfolio]} testID='Portfolio'>
      <Header {...propsOut.headerProps} />
      {getProjects(projectsList)}
    </View>
  )
}

export const Portfolio = React.memo(withDeviceType(PortfolioComponent))
