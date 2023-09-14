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
  storeStateSlice: {
    profiles: RootStoreType['profiles']
    idProfileActive: RootStoreType['globalVars']['idProfileActive']
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
  tooltipPopoverIconProps: IconYrlPropsType
  promptExamplesProps: Omit<PromptExamplesPropsType, 'handleEvents'>
}

export type ChatInputPropsOutType = {
  inputTextYrlProps: InputTextYrlPropsType
  sendButtonYrlProps: ButtonYrlPropsType
  sendIconYrlProps: IconYrlPropsType
  tooltipPromptExamples: TooltipYrlPropsType
  tooltipHelp: TooltipYrlPropsType
  buttonCopyToClipboardProps: ButtonYrlPropsType
  buttonPasteFromClipboardProps: ButtonYrlPropsType
  buttonClearInputProps: ButtonYrlPropsType
  buttonSmallSendProps: ButtonYrlPropsType
}

/**
 * @import import { ChatInputType } from './ChatInputType'
 */
export interface ChatInputType
  extends React.FunctionComponent<ChatInputPropsType> {
  (props: ChatInputPropsType): React.ReactElement
}
