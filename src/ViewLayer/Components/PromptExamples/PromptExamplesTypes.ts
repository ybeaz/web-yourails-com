import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

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
