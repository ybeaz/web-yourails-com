import { UserType } from '../../../@types/UserType'

export interface NameStatusPropsType {
  styleProps?: any
  user: UserType
  status: string
}

/**
 * @import import { NameStatusType } from './NameStatusType'
 */
export interface NameStatusType
  extends React.FunctionComponent<NameStatusPropsType> {
  (props: NameStatusPropsType): React.ReactElement
}
