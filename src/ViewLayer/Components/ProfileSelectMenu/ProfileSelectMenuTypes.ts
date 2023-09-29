import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { ProfileType } from '../../../@types/GraphqlTypes'

export interface ProfileSelectMenuPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  handleEvents: HandleEventsType
  profiles: ProfileType[]
  idUserHost: string
  urlParam1: string
  urlParam2: string
  query: any
}

export type ProfileSelectMenuPropsOutType = Record<string, any>

/**
 * @import import { ProfileSelectMenuType } from './ProfileSelectMenuType'
 */
export interface ProfileSelectMenuType
  extends React.FunctionComponent<ProfileSelectMenuPropsType> {
  (props: ProfileSelectMenuPropsType): React.ReactElement
}
