import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'

export interface ProjectViewPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
  title: string
  subtitle: string
  description: string
  customer: string
  builtwith: string
  imgSrc: string
  linkHref: string
  imageWidth: number
  imageHeight: number
  index: number
  elementWidth: number
}

/**
 * @import import { ProjectViewType } from './ProjectViewType'
 */
export interface ProjectViewType
  extends React.FunctionComponent<ProjectViewPropsType> {
  (props: ProjectViewPropsType): React.ReactElement
}
