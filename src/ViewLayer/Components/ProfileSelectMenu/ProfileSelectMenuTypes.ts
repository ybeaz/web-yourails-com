import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface ProfileSelectMenuPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

export type ProfileSelectMenuPropsOutType = Record<string, any>

/**
 * @import import { ProfileSelectMenuType } from './ProfileSelectMenuType'
 */
export interface ProfileSelectMenuType
  extends React.FunctionComponent<ProfileSelectMenuPropsType> {
  (props: ProfileSelectMenuPropsType): React.ReactElement
}
