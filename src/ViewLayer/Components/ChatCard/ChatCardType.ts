import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { ProfileType } from '../../../@types/ProfileType'

export interface ChatCardPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  profile: ProfileType
}

/**
 * @import import { ChatCardType } from './ChatCardType'
 */
export interface ChatCardType
  extends React.FunctionComponent<ChatCardPropsType> {
  (props: ChatCardPropsType): React.ReactElement
}
