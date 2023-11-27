import React, { ReactElement, useEffect } from 'react'
import { View } from 'react-native'

import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import {
  withStoreStateYrl,
  withPropsYrl,
  withElementDimensionsYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { ProjectView } from '../ProjectView/ProjectView'
import { getFilteredObjsArrayBy } from '../../../Shared/getFilteredObjsArrayBy'
import { ProjectType } from '../../../@types/ProjectType'
import { Header } from '../Header/Header'
import { getImageSizesFor1of2Columns } from '../../../Shared/getImageSizesFor1of2Columns'
import { styles } from './PortfolioStyles'
import { PortfolioType } from './PortfolioTypes'
import '../../Styles/styleGlobal'

/**
 * @import import { Portfolio } from '../Components/Portfolio/Portfolio'
 */
const PortfolioComponent: PortfolioType = props => {
  const {
    styleProps = { Portfolio: {} },
    mediaParams = mediaParamsDefault,
    store,
    elementDimensions: { elementWidth },
    handleEvents,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const {
    globalVars: { idProfileActive },
    projects,
  } = store

  useEffect(() => {
    handleEvents.ADD_PROJECTS({}, {})
  }, [])

  const projectsUserHost = getFilteredObjsArrayBy(
    projects,
    'profileID',
    idProfileActive
  ) as ProjectType[]

  const { imageWidth, imageHeight } = getImageSizesFor1of2Columns(
    elementWidth < 1024 ? 'xsSmMd' : 'lgXl',
    elementWidth
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

        const propsOut: Record<string, any> = {
          projectViewProps: {
            key: `ProjectView-${index}`,
            title,
            isActive,
            pathname,
            subtitle,
            description,
            customer,
            builtwith,
            imgSrc,
            linkHref,
            index,
            imageWidth,
            imageHeight,
            elementWidth,
          },
        }

        return <ProjectView {...propsOut.projectViewProps} />
      })
  }

  const propsOut: Record<string, any> = {
    headerProps: {
      styleProps: {
        Header: { paddingBottom: '1.5rem'.getPx() },
        headerText: {},
      },
      mediaParams: { deviceType: '' },
      headerText: 'Projects & Examples',
    },
  }

  return (
    <View style={[style.Portfolio, styleProps.Portfolio]} testID='Portfolio'>
      <Header {...propsOut.headerProps} />
      {getProjects(projectsUserHost)}
    </View>
  )
}

export const Portfolio = withPropsYrl({ handleEvents: handleEventsProp })(
  withStoreStateYrl(
    withParamsMediaYrl(withElementDimensionsYrl(React.memo(PortfolioComponent)))
  )
)
