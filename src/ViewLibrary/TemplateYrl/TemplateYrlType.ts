/**
 * ITemplateYrlProps Interface
 */
export interface TemplateYrlPropsType {
  styleProps?: { TemplateYrl: Object }
}

export interface TemplateYrlType
  extends React.FunctionComponent<TemplateYrlPropsType> {
  (props: TemplateYrlPropsType): React.ReactElement
}
