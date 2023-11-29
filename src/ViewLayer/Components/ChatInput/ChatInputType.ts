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
import { TextPropsType } from '../Text/Text'

export interface ChatInputPropsType {
  handleEvents: HandleEventsType
  profileActiveID: string
  inputChat: Record<string, string>
  storeStateSlice: {
    profiles: RootStoreType['profiles']
    profileActiveID: RootStoreType['globalVars']['profileActiveID']
    inputChat: RootStoreType['forms']['inputChat']
    isMainColumnBlank: RootStoreType['componentsState']['isMainColumnBlank']
    modalFrame: RootStoreType['componentsState']['modalFrame']
  }
  mediaParams?: MediaParamsDefaultType
}

export type ChatInputPropsOutM1Type = {
  tooltipTitleWrapperProps: {
    style: any
    testID: string
  }
  tooltipPopoverPromptExamplesIconProps: IconYrlPropsType
  tooltipPopoverHelpIconProps: IconYrlPropsType
  promptExamplesProps: Omit<PromptExamplesPropsType, 'handleEvents'>
  helpTooltipsTextProps: TextPropsType
}

export type ChatInputPropsOutType = {
  inputTextYrlProps: InputTextYrlPropsType
  sendButtonYrlProps: ButtonYrlPropsType
  sendIconYrlProps: IconYrlPropsType
  tooltipPromptExamplesProps: TooltipYrlPropsType
  tooltipHelpProps: TooltipYrlPropsType
  buttonCopyToClipboardProps: ButtonYrlPropsType
  buttonPasteFromClipboardProps: ButtonYrlPropsType
  buttonClearInputProps: ButtonYrlPropsType
  buttonSmallSendProps: ButtonYrlPropsType
  buttonIconYrlWrapperProps: { style: any; testID: string }
}

/**
 * @import import { ChatInputType } from './ChatInputType'
 */
export interface ChatInputType
  extends React.FunctionComponent<ChatInputPropsType> {
  (props: ChatInputPropsType): React.ReactElement
}
