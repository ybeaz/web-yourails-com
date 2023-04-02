import React, { useCallback, ReactElement } from 'react'
import { ImageResizeMode, View, Linking, Alert } from 'react-native'

import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import { getProjectList, ProjectType } from '../../../r1Content/r1Projects'
import { PortfolioType } from './PortfolioType'
import { PortfolioStyle as style } from './PortfolioStyle'
import { Text } from '../../Components/Text/Text'

/**
 * @import import { Portfolio } from '../Components/Portfolio/Portfolio'
 */
const PortfolioComponent: PortfolioType = props => {
  const { styleProps = { Portfolio: {} } } = props

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

        const url = linkHref
        const handlePress = useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url)

          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url)
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`)
          }
        }, [url])

        const contain: ImageResizeMode = 'contain'

        const propsOut = {
          projectButtonYrl: {
            styleProps: { ButtonYrl: {}, title: {} },
            titleText: '',
            testID: 'projectButtonYrl',
            disabled: false,
            onPress: () => handlePress(),
          },
          projectImageYrlProps: {
            styleProps: {
              ImageYrl: {},
              image: {
                width: '30rem',
                height: '16.8rem',
              },
            },
            testID: `projectImageYrl-${index}`,
            uri: imgSrc,
            resizeMode: contain,
          },
        }

        return (
          <View
            key={`project-${index}`}
            style={[style.projectView]}
            testID='projectView'
          >
            <View style={[style.imageView]} testID='imageView'>
              <ButtonYrl {...propsOut.projectButtonYrl}>
                <ImageYrl {...propsOut.projectImageYrlProps} />
              </ButtonYrl>
            </View>
            <View
              style={[style.projectProfileView]}
              testID='projectProfileView'
            >
              <View style={[style.titleView]} testID='titleView'>
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
          </View>
        )
      })
  }

  const propsOut = {}

  return (
    <View style={[style.Portfolio, styleProps.Portfolio]} testID='Portfolio'>
      {getProjects(projectsList)}
    </View>
  )
}

export const Portfolio = React.memo(PortfolioComponent)
