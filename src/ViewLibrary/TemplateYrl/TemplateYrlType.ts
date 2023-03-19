/**
 * ITemplateYrlProps Interface
 */
export interface TemplateYrlPropsType {
  styleProps?: { TemplateYrl: Object }
  testID: string
}

export interface TemplateYrlType
  extends React.FunctionComponent<TemplateYrlPropsType> {
  (props: TemplateYrlPropsType): React.ReactElement
}
