import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../@types/RootStoreType'
import { TooltipPopoverPropsOutType } from '../TooltipPopover/TooltipPopover'
import { ControlledTooltipPropsType } from '../ControlledTooltip/ControlledTooltipType'
import {
  InputTextYrlPropsType,
  ButtonYrlPropsType,
  IconYrlPropsType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'

export interface ChatInputPropsType {
  handleEvents: HandleEventsType
  idProfileActive: string
  inputChat: Record<string, string>
  store: RootStoreType
  mediaParams?: MediaParamsDefaultType
}

export type ChatInputPropsOutType = {
  inputTextYrlProps: InputTextYrlPropsType
  sendButtonYrlProps: ButtonYrlPropsType
  sendIconYrlProps: IconYrlPropsType
  tooltipPopoverIconProps: IconYrlPropsType
  tooltipPopoverProps: TooltipPopoverPropsOutType
  controlledTooltipProps: Omit<
    ControlledTooltipPropsType,
    'children' | 'popover'
  >
}

/**
 * @import import { ChatInputType } from './ChatInputType'
 */
export interface ChatInputType
  extends React.FunctionComponent<ChatInputPropsType> {
  (props: ChatInputPropsType): React.ReactElement
}
