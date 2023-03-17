/**
 * IImageYrlProps Interface
 */
export interface ImageYrlPropsType {
  styleProps?: { container: Object; image: Object }
  uri: string
}

export interface ImageYrlType
  extends React.FunctionComponent<ImageYrlPropsType> {
  (props: ImageYrlPropsType): React.ReactElement
}