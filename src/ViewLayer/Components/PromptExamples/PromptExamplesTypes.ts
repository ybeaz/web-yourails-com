import {
  ButtonYrlPropsType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { IdUserType } from '../../../@types/UserType'
import { HeaderPropsType } from '../Header/Header'

export interface PromptExamplesPropsType {
  styleProps?: {
    PromptExamples?: any
    scrollView?: any
    contentContainerStyle?: any
    promptExampleText?: any
  }
  mediaParams?: MediaParamsDefaultType
  promptExamples?: string[]
  onHeightChange: (height: number) => void
  onPromptExampleClick: () => void
  handleEvents: HandleEventsType
  idProfileActive: IdUserType
}

export type PromptExamplesPropsOutType = {
  headerProps: HeaderPropsType
}

export type PromptExamplesListPropsOutType = {
  tooltipsLinkingButtonYrlProps: ButtonYrlPropsType & {
    key: string
  }
}

/**
 * @import import { PromptExamplesType } from './PromptExamplesType'
 */
export interface PromptExamplesComponentType
  extends React.FunctionComponent<PromptExamplesPropsType> {
  (props: PromptExamplesPropsType): React.ReactElement
}

export type PromptExamplesType = React.NamedExoticComponent<any>
