import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import { getProjectList, ProjectType } from '../../../r1Content/r1Projects'
import { PortfolioType } from './PortfolioType'
import { PortfolioStyle as style } from './PortfolioStyle'

/**
 * @import import { Portfolio } from '../Components/Portfolio/Portfolio'
 */
const PortfolioComponent: PortfolioType = props => {
  const { styleProps = { Portfolio: {} } } = props

  const projectsList: ProjectType[] = getProjectList()
  console.info('Portfolio [17]', { projectsList })

  const getProjects = (projectsList: ProjectType[]): ReactElement[] => {
    return projectsList.map((project: ProjectType, index: number) => {
      const {
        title,
        pathname,
        typeDemo,
        subtitle,
        descript,
        customer,
        builtwith,
        imgSrc,
        linkHref,
      } = project

      const propsOut = {
        projectButtonYrl: {
          styleProps: { ButtonYrl: {}, title: {} },
          titleText: '',
          testID: 'projectButtonYrl',
          disabled: false,
          onPress: () => {},
        },
        projectImageYrlProps: {
          styleProps: {
            ImageYrl: {},
            image: { width: '30rem', height: '20rem' },
          },
          testID: `projectImageYrl-${index}`,
          uri: imgSrc,
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
          <View style={[style.projectProfileView]} testID='projectProfileView'>
            <Text>I have very diverse and rich portfolio!</Text>
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
