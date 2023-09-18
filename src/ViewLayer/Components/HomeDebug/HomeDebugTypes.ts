import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface HomeDebugPropsType {
  styleProps?: any
  onLayout?: any
  navigation?: any
  titleText: string
}

export type HomeDebugPropsOutType = Record<string, any>

/**
 * @import import { HomeDebugType } from './HomeDebugType'
 */
export interface HomeDebugComponentType
  extends React.FunctionComponent<HomeDebugPropsType> {
  (props: HomeDebugPropsType): React.ReactElement
}

export type HomeDebugType = React.FunctionComponent<HomeDebugPropsType>
