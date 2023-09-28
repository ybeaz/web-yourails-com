import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { ButtonYrlPropsType } from '../../../YrlNativeViewLibrary'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface HeaderMobilePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  handleEvents?: HandleEventsType
}

export type HeaderMobilePropsOutType = {
  buttonBackProps: ButtonYrlPropsType
}

/**
 * @import import { HeaderMobileType } from './HeaderMobileType'
 */
export interface HeaderMobileComponentType
  extends React.FunctionComponent<HeaderMobilePropsType> {
  (props: HeaderMobilePropsType): React.ReactElement
}

export type HeaderMobileType = React.FunctionComponent<HeaderMobilePropsType>
