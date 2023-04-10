import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { ProfileType } from '../../../@types/ProfileType'

export interface TopBarMainColumnPropsType {
  user: ProfileType
  mediaParams?: UseMediaQueryResType
}

/**
 * @import import { TopBarMainColumnType } from './TopBarMainColumnType'
 */
export interface TopBarMainColumnType
  extends React.FunctionComponent<TopBarMainColumnPropsType> {
  (props: TopBarMainColumnPropsType): React.ReactElement
}
