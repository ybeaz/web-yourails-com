import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { ProfileType } from '../../../@types/ProfileType'
import { MessageType } from '../../../@types/MessageType'
import { CompetencyType } from '../../../@types/CompetencyType'
import { ProjectType } from '../../../@types/ProjectType'

export interface ChatSpacePropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  idUserHost: string
  competencyTags: CompetencyType[]
  projects: ProjectType[]
  profiles: ProfileType[]
  messages: Omit<MessageType, 'position' | 'isTail'>[]
  modalFrame: any
  handleEvents: any
}

/**
 * @import import { ChatSpaceType } from './ChatSpaceType'
 */
export interface ChatSpaceType
  extends React.FunctionComponent<ChatSpacePropsType> {
  (props: ChatSpacePropsType): React.ReactElement
}
