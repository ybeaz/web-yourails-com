import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { IdUserType } from '../../../@types/UserType'

export interface PromptExamplesPropsType {
  styleProps?: {
    PromptExamples?: any
    scrollView?: any
    promptExampleText?: any
  }
  mediaParams?: MediaParamsDefaultType
  promptExamples?: string[]
  onHeightChange: (height: number) => void
  onPromptExampleClick: () => void
  handleEvents: HandleEventsType
  idProfileActive: IdUserType
}

export type PromptExamplesPropsOutType = Record<string, any>

/**
 * @import import { PromptExamplesType } from './PromptExamplesType'
 */
export interface PromptExamplesComponentType
  extends React.FunctionComponent<PromptExamplesPropsType> {
  (props: PromptExamplesPropsType): React.ReactElement
}

export type PromptExamplesType = React.NamedExoticComponent<any>
