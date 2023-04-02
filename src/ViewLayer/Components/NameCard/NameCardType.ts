import { UserType } from '../../../@types/UserType'

export interface NameCardPropsType {
  styleProps?: any
  user: UserType
  status: string
}

/**
 * @import import { NameCardType } from './NameCardType'
 */
export interface NameCardType
  extends React.FunctionComponent<NameCardPropsType> {
  (props: NameCardPropsType): React.ReactElement
}
