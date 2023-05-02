/**
 * @description SvgIconComponentYrlType and SvgIconComponentYrlProps Interface
 */
export interface SvgIconComponentYrlPropsType {
  color?: string
  size?: number
  testID?: string
}

export interface SvgIconComponentYrlType
  extends React.FunctionComponent<SvgIconComponentYrlPropsType> {
  (props: SvgIconComponentYrlPropsType): React.ReactElement
}
