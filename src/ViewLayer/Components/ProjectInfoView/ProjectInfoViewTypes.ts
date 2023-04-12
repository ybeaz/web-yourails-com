import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'

export interface ProjectInfoViewPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
  title: string
  subtitle: string
  description: string
  customer: string
  builtwith: string
}

/**
 * @import import { ProjectInfoViewType } from './ProjectInfoViewType'
 */
export interface ProjectInfoViewType
  extends React.FunctionComponent<ProjectInfoViewPropsType> {
  (props: ProjectInfoViewPropsType): React.ReactElement
}
