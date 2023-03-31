/**
 * ITemplateYrlProps Interface
 */
export interface TemplateYrlPropsType {
  styleProps?: { TemplateYrl: any }
  testID: string
}

export interface TemplateYrlType
  extends React.FunctionComponent<TemplateYrlPropsType> {
  (props: TemplateYrlPropsType): React.ReactElement
}
