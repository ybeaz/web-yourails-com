/**
 * IIconYrlProps Interface
 * @prop Icon's color and optional.
 * @prop Icon's size and optional.
 * @prop iconName A string that reflects the name of the icon and optional.
 */
export interface IconYrlPropsType {
  library?: string
  name?: string
  color?: string
  size?: number
  testID: string
}

export interface IconYrlType extends React.FunctionComponent<IconYrlPropsType> {
  (props: IconYrlPropsType): React.ReactElement
}
