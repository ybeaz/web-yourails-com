import { ReactElement } from 'react'
import { Modal } from 'react-native'

export interface ControlledTooltipPropsType {
  styleProps?: any
  ModalComponent: typeof Modal
  backgroundColor: string
  popover: ReactElement
  containerStyle: any
  withOverlay?: boolean
  withPointer?: boolean
  children: ReactElement
}

/**
 * @import import { ControlledTooltipType } from './ControlledTooltipType'
 */
export interface ControlledTooltipType
  extends React.FunctionComponent<ControlledTooltipPropsType> {
  (props: ControlledTooltipPropsType): React.ReactElement
}
