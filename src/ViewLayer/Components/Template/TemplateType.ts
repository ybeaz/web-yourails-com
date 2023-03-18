export interface TemplatePropsType {}

/**
 * @import import { TemplateType } from './TemplateType'
 */
export interface TemplateType
  extends React.FunctionComponent<TemplatePropsType> {
  (props: TemplatePropsType): React.ReactElement
}
