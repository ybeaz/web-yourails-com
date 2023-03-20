export interface TemplatePropsType {
  styleProps?: any
}

/**
 * @import import { TemplateType } from './TemplateType'
 */
export interface TemplateType
  extends React.FunctionComponent<TemplatePropsType> {
  (props: TemplatePropsType): React.ReactElement
}
