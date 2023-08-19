import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface AboutUsPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

export type AboutUsPropsOutType = Record<string, any>

/**
 * @import import { AboutUsType } from './AboutUsType'
 */
export interface AboutUsType extends React.FunctionComponent<AboutUsPropsType> {
  (props: AboutUsPropsType): React.ReactElement
}
