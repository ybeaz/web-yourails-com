import { UserType } from '../../../@types/UserType'

export interface ProfileItemPropsType {
  styleProps?: any
  iconLibrary: string
  iconName: string
  content: string | React.ReactElement | React.ReactElement[]
  label: string
}

/**
 * @import import { ProfileItemType } from './ProfileItemType'
 */
export interface ProfileItemType
  extends React.FunctionComponent<ProfileItemPropsType> {
  (props: ProfileItemPropsType): React.ReactElement
}
