import { ReactElement } from 'react'

/**
 * IModalFrameYrlProps Interface
 */
export interface ModalFrameYrlPropsType {
  styleProps?: { ModalFrameYrl: any; content: any }
  children?: ReactElement | ReactElement[]
  isShow: boolean
  testID?: string
}

export interface ModalFrameYrlType
  extends React.FunctionComponent<ModalFrameYrlPropsType> {
  (props: ModalFrameYrlPropsType): React.ReactElement
}
