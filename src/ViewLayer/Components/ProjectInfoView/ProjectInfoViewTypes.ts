import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface ProjectInfoViewPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
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
