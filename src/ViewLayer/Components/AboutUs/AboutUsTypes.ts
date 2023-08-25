import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { HeaderPropsType } from '../Header/Header'
import { TextPropsType } from '../../Components/Text/Text'

export interface AboutUsPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

export type AboutUsPropsOutType = {
  header3Props: HeaderPropsType
  header4Props: HeaderPropsType
  textProps: TextPropsType
}

/**
 * @import import { AboutUsType } from './AboutUsType'
 */
export interface AboutUsType extends React.FunctionComponent<AboutUsPropsType> {
  (props: AboutUsPropsType): React.ReactElement
}
