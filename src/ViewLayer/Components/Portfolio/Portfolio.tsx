import React, { useCallback, ReactElement } from 'react'
import { ImageResizeMode, View, Linking, Alert } from 'react-native'

import { withStoreState } from '../../Hooks/withStoreState'
import { ProjectType } from '../../../@types/ProjectType'
import { ProjectInfoView } from '../ProjectInfoView/ProjectInfoView'
import { Header } from '../Header/Header'
import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { useLinkClickRes } from '../../Hooks/useLinkClickRes'
import { getImageSizesFor1of2Columns } from '../../../Shared/getImageSizesFor1of2Columns'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { styles } from './PortfolioStyles'
import { PortfolioType } from './PortfolioTypes'

import { projects } from '../../../ContentMock/projectsMock'

/**
 * @import import { Portfolio } from '../Components/Portfolio/Portfolio'
 */
const PortfolioComponent: PortfolioType = props => {
  const {
    styleProps = { Portfolio: {} },
    mediaParams = mediaParamsDefault,
    store,
  } = props
  const { deviceType, screenCase, width } = mediaParams
  const style = styles[deviceType]

  // const store = useSelector((store2: RootStoreType) => store2)
  const {
    globalVars: { idUserHost },
  } = store

  const { imageWidth, imageHeight } = getImageSizesFor1of2Columns(
    screenCase,
    width
  )

  const getProjects = (projects: ProjectType[]): ReactElement[] => {
    return projects
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

        const propsOut: Record<string, any> = {
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
                borderRadius: 3,
                width: imageWidth,
                height: imageHeight,
              },
            },
            // onLayout: onImageLayout,
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

        return (
          <View
            key={`project-${index}`}
            style={[style.projectView]}
            testID='projectView'
          >
            {screenCase === 'xsSmMd' && (
              <ProjectInfoView {...propsOut.projectInfoViewProps} />
            )}
            <View style={[style.buttonImageView]} testID='buttonImageView'>
              <ButtonYrl {...propsOut.projectButtonYrl}>
                <View style={[style.imageView]} testID='imageView'>
                  <ImageYrl {...propsOut.projectImageYrlProps} />
                </View>
              </ButtonYrl>
            </View>
            {screenCase === 'lgXl' && (
              <ProjectInfoView {...propsOut.projectInfoViewProps} />
            )}
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
      headerText: 'Side projects & widgets',
    },
  }

  return (
    <View style={[style.Portfolio, styleProps.Portfolio]} testID='Portfolio'>
      <Header {...propsOut.headerProps} />
      {getProjects(projects)}
    </View>
  )
}

export const Portfolio = React.memo(
  withStoreState(withDeviceType(PortfolioComponent))
)
