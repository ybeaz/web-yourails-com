import { ReactElement } from 'react'
import { UserType } from '../../../@types/UserType'

export interface AvatarPlusInfoPropsType {
  styleProps?: {
    AvatarPlusInfo?: any
    viewStyle?: any
  }
  onPress: () => any
  user: UserType
  children: ReactElement
}

/**
 * @import import { AvatarPlusInfoType } from './AvatarPlusInfoType'
 */
export interface AvatarPlusInfoType
  extends React.FunctionComponent<AvatarPlusInfoPropsType> {
  (props: AvatarPlusInfoPropsType): React.ReactElement
}
