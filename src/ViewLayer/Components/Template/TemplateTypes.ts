import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface TemplatePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

/**
 * @import import { TemplateType } from './TemplateType'
 */
export interface TemplateType
  extends React.FunctionComponent<TemplatePropsType> {
  (props: TemplatePropsType): React.ReactElement
}
