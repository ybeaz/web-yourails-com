'ImageResizeMode | undefined'
import { ImageResizeMode } from 'react-native'

/**
 * IImageYrlProps Interface
 */
export interface ImageYrlPropsType {
  styleProps?: { ImageYrl: any; image: any }
  testID: string
  uri: string
  resizeMode?: ImageResizeMode
}

export interface ImageYrlType
  extends React.FunctionComponent<ImageYrlPropsType> {
  (props: ImageYrlPropsType): React.ReactElement
}
