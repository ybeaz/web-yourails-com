/**
 * ITemplateYrlProps Interface
 */
export interface TemplateYrlPropsType {
  styleProps?: { container: Object }
}

export interface TemplateYrlType
  extends React.FunctionComponent<TemplateYrlPropsType> {
  (props: TemplateYrlPropsType): React.ReactElement
}