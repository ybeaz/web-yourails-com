'ImageResizeMode | undefined'
import { ImageResizeMode } from 'react-native'

/**
 * IImageSvgYrlProps Interface
 */
export interface ImageSvgYrlPropsType {
  isActive?: boolean
  styleProps?: { ImageYrl?: any; image?: any }
  key?: string
  testID: string
  uri?: string

  onLayout?: any
}

export interface ImageSvgYrlType
  extends React.FunctionComponent<ImageSvgYrlPropsType> {
  (props: ImageSvgYrlPropsType): React.ReactElement | null
}
