import { User } from '../../../@types/User'

export interface AvatarNameStatusPropsType {
  styleProps?: {
    AvatarNameStatus?: any
    viewStyle?: any
  }
  user: User
}

/**
 * @import import { AvatarNameStatusType } from './AvatarNameStatusType'
 */
export interface AvatarNameStatusType
  extends React.FunctionComponent<AvatarNameStatusPropsType> {
  (props: AvatarNameStatusPropsType): React.ReactElement
}
