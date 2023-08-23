import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface PromptExamplesPropsType {
  styleProps?: {
    PromptExamples: any
    promptExampleView: any
    promptExampleText: any
  }
  mediaParams?: MediaParamsDefaultType
  promptExamples?: string[]
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
