/**
 * TemplateYrlType and TemplateYrlProps Interface
 */
export interface TemplateYrlPropsType {
  styleProps?: { TemplateYrl: any }
  testID: string
}

export type TemplatePropsOutYrlType = Record<string, any>

export interface TemplateYrlType
  extends React.FunctionComponent<TemplateYrlPropsType> {
  (props: TemplateYrlPropsType): React.ReactElement
}
