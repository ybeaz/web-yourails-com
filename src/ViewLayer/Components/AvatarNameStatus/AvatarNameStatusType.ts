import { UserType } from '../../../@types/UserType'

export interface AvatarNameStatusPropsType {
  styleProps?: {
    AvatarNameStatus?: any
    viewStyle?: any
  }
  user: UserType
}

/**
 * @import import { AvatarNameStatusType } from './AvatarNameStatusType'
 */
export interface AvatarNameStatusType
  extends React.FunctionComponent<AvatarNameStatusPropsType> {
  (props: AvatarNameStatusPropsType): React.ReactElement
}
