import { ProfileType } from '../../../@types/GraphqlTypes'

export interface NameStatusPropsType {
  styleProps?: any
  profile: ProfileType
  status: string
}

/**
 * @import import { NameStatusType } from './NameStatusType'
 */
export interface NameStatusType
  extends React.FunctionComponent<NameStatusPropsType> {
  (props: NameStatusPropsType): React.ReactElement
}
