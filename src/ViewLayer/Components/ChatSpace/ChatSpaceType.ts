import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { ProfileType } from '../../../@types/ProfileType'
import { MessageType } from '../../../@types/MessageType'
import { CompetencyTagType } from '../../../@types/CompetencyTagType'
import { ProjectType } from '../../../@types/ProjectType'

export interface ChatSpacePropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  idUserHost: string
  competencyTags: CompetencyTagType[]
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
