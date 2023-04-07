import { ReactElement } from 'react'
import { IconYrlPropsType } from '../IconYrl/IconYrlType'
import { ButtonYrlPropsType } from '../ButtonYrl/ButtonYrlType'

/**
 * IModalFrameYrlProps Interface
 */
export interface ModalFrameYrlPropsType {
  styleProps?: { ModalFrameYrl: any; imageBackground: any; content: any }
  linearGradientColors: string[]
  children?: ReactElement | ReactElement[]
  isShow: boolean
  isShowImageBackground: boolean
  testID?: string
  buttonBack?: ButtonYrlPropsType
  buttonClose?: ButtonYrlPropsType
  imageBackgroundSource?: any
  isButtonBack?: boolean
  isButtonClose?: boolean
}

export interface ModalFrameYrlType
  extends React.FunctionComponent<ModalFrameYrlPropsType> {
  (props: ModalFrameYrlPropsType): React.ReactElement | null
}
