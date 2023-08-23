import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../@types/RootStoreType'
import {
  InputTextYrlPropsType,
  ButtonYrlPropsType,
  IconYrlPropsType,
  MediaParamsDefaultType,
  TooltipYrlPropsType,
} from '../../../YrlNativeViewLibrary'
import { PromptExamplesPropsType } from '../PromptExamples/PromptExamples'

export interface ChatInputPropsType {
  handleEvents: HandleEventsType
  idProfileActive: string
  inputChat: Record<string, string>
  store: RootStoreType
  mediaParams?: MediaParamsDefaultType
}

export type ChatInputPropsOutM1Type = {
  tooltipTitleWrapperProps: {
    style: any
    testID: string
  }
  tooltipPopoverIconProps: IconYrlPropsType
  promptExamplesProps: PromptExamplesPropsType
}

export type ChatInputPropsOutType = {
  inputTextYrlProps: InputTextYrlPropsType
  sendButtonYrlProps: ButtonYrlPropsType
  sendIconYrlProps: IconYrlPropsType
  tooltipPromptExamples: TooltipYrlPropsType
}

/**
 * @import import { ChatInputType } from './ChatInputType'
 */
export interface ChatInputType
  extends React.FunctionComponent<ChatInputPropsType> {
  (props: ChatInputPropsType): React.ReactElement
}
