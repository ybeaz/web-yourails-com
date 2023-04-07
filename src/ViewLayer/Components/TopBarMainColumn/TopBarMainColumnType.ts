import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { UserType } from '../../../@types/UserType'

export interface TopBarMainColumnPropsType {
  user: UserType
  mediaParams?: UseMediaQueryResType
}

/**
 * @import import { TopBarMainColumnType } from './TopBarMainColumnType'
 */
export interface TopBarMainColumnType
  extends React.FunctionComponent<TopBarMainColumnPropsType> {
  (props: TopBarMainColumnPropsType): React.ReactElement
}
