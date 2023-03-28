import { ReactElement } from 'react'
import { IconYrlPropsType } from '../IconYrl/IconYrlType'
import { ButtonYrlPropsType } from '../ButtonYrl/ButtonYrlType'

/**
 * IModalFrameYrlProps Interface
 */
export interface ModalFrameYrlPropsType {
  styleProps?: { ModalFrameYrl: any; imageBackground: any; content: any }
  children?: ReactElement | ReactElement[]
  isShow: boolean
  isShowImageBackground: boolean
  testID?: string
  buttonBack?: ButtonYrlPropsType
  buttonClose?: ButtonYrlPropsType
  imageBackgroundSource?: any
}

export interface ModalFrameYrlType
  extends React.FunctionComponent<ModalFrameYrlPropsType> {
  (props: ModalFrameYrlPropsType): React.ReactElement | null
}
