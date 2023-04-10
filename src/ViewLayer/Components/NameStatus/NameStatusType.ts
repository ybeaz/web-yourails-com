import { ProfileType } from '../../../@types/ProfileType'

export interface NameStatusPropsType {
  styleProps?: any
  user: ProfileType
  status: string
}

/**
 * @import import { NameStatusType } from './NameStatusType'
 */
export interface NameStatusType
  extends React.FunctionComponent<NameStatusPropsType> {
  (props: NameStatusPropsType): React.ReactElement
}
