import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface TooltipPopoverPropsType {
  title?: string
  content: string
  linkHref?: string
  iconLibrary?: string
  iconName?: string
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  testID: string
}

export type TooltipPopoverPropsOutType = Record<string, any>

/**
 * @import import { TooltipPopoverType } from './TooltipPopoverType'
 */
export interface TooltipPopoverType
  extends React.FunctionComponent<TooltipPopoverPropsType> {
  (props: TooltipPopoverPropsType): React.ReactElement
}
