import { ReactElement } from 'react'
import { IconYrlPropsType } from '../IconYrl/IconYrlType'

/**
 * IModalFrameYrlProps Interface
 */
export interface ModalFrameYrlPropsType {
  styleProps?: { ModalFrameYrl: any; content: any }
  children?: ReactElement | ReactElement[]
  isShow: boolean
  isShowImageBackground: boolean
  testID?: string
  iconClose?: IconYrlPropsType
  imageBackgroundSource?: any
}

export interface ModalFrameYrlType
  extends React.FunctionComponent<ModalFrameYrlPropsType> {
  (props: ModalFrameYrlPropsType): React.ReactElement
}
