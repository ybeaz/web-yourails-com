'ImageResizeMode | undefined'
import { ImageResizeMode } from 'react-native'

/**
 * IImageYrlProps Interface
 */
export interface ImageYrlPropsType {
  isActive?: boolean
  styleProps?: { ImageYrl?: any; image?: any }
  key?: string
  testID: string
  uri?: string
  resizeMode?: ImageResizeMode
  onLayout?: any
}

export interface ImageYrlType
  extends React.FunctionComponent<ImageYrlPropsType> {
  (props: ImageYrlPropsType): React.ReactElement | null
}
