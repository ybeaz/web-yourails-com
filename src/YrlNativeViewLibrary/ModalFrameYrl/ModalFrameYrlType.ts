import { ReactElement } from 'react'
import { IconYrlPropsType } from '../IconYrl/IconYrlType'
import { ButtonYrlPropsType } from '../ButtonYrl/ButtonYrlType'

/**
 * ModalFrameYrlType Interface
 * @import import { ModalFrameYrlPropsType } from './YrlNativeViewLibrary/ModalFrameYrlPropsType'
 */
export interface ModalFrameYrlPropsType {
  styleProps?: {
    ModalFrameYrl: any
    imageBackground: any
    content: any
    buttonBackWrapper: any
    buttonCloseWrapper: any
  }
  linearGradientColors: string[]
  children?: ReactElement | ReactElement[] | null
  isShow: boolean
  isShowImageBackground: boolean
  testID?: string
  buttonBackProps?: ButtonYrlPropsType
  buttonCloseProps?: ButtonYrlPropsType
  imageBackgroundSource?: any
  isButtonBack?: boolean
  isButtonClose?: boolean
}

export interface ModalFrameYrlType
  extends React.FunctionComponent<ModalFrameYrlPropsType> {
  (props: ModalFrameYrlPropsType): React.ReactElement | null
}
