import { UserType } from '../../../@types/UserType'

export interface TopBarMainColumnPropsType {
  user: UserType
}

/**
 * @import import { TopBarMainColumnType } from './TopBarMainColumnType'
 */
export interface TopBarMainColumnType
  extends React.FunctionComponent<TopBarMainColumnPropsType> {
  (props: TopBarMainColumnPropsType): React.ReactElement
}
