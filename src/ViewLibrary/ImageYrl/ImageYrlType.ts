/**
 * IImageYrlProps Interface
 */
export interface ImageYrlPropsType {
  styleProps?: { ImageYrl: Object; image: Object }
  testID: string
  uri: string
}

export interface ImageYrlType
  extends React.FunctionComponent<ImageYrlPropsType> {
  (props: ImageYrlPropsType): React.ReactElement
}
