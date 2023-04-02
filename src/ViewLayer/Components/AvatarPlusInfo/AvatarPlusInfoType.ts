import { UserType } from '../../../@types/UserType'

export interface AvatarPlusInfoPropsType {
  styleProps?: {
    AvatarPlusInfo?: any
    viewStyle?: any
  }
  user: UserType
  status: string
}

/**
 * @import import { AvatarPlusInfoType } from './AvatarPlusInfoType'
 */
export interface AvatarPlusInfoType
  extends React.FunctionComponent<AvatarPlusInfoPropsType> {
  (props: AvatarPlusInfoPropsType): React.ReactElement
}
