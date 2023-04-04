import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface TemplatePropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
}

/**
 * @import import { TemplateType } from './TemplateType'
 */
export interface TemplateType
  extends React.FunctionComponent<TemplatePropsType> {
  (props: TemplatePropsType): React.ReactElement
}
