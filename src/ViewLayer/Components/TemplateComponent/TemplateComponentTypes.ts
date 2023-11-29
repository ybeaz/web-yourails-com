import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface TemplatePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

export type TemplatePropsOutType = Record<string, any>

/**
 * @import import { TemplateType } from './TemplateType'
 */
export interface TemplateComponentType
  extends React.FunctionComponent<TemplatePropsType> {
  (props: TemplatePropsType): React.ReactElement
}

export type TemplateType = React.FunctionComponent<TemplatePropsType>
