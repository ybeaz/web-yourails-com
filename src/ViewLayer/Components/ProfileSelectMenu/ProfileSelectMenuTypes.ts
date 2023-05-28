import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

export interface ProfileSelectMenuPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  handleEvents: HandleEventsType
}

export type ProfileSelectMenuPropsOutType = Record<string, any>

/**
 * @import import { ProfileSelectMenuType } from './ProfileSelectMenuType'
 */
export interface ProfileSelectMenuType
  extends React.FunctionComponent<ProfileSelectMenuPropsType> {
  (props: ProfileSelectMenuPropsType): React.ReactElement
}
