/**
 * ImageFromUriYrlType and ImageFromUriYrlProps Interface
 */
export interface ImageFromUriYrlPropsType {
  styleProps?: { ImageFromUriYrl: any }
  testID?: string
}

export interface ImageFromUriYrlType
  extends React.FunctionComponent<ImageFromUriYrlPropsType> {
  (props: ImageFromUriYrlPropsType): React.ReactElement
}
