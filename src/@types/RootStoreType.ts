import { ProfileType } from './ProfileType'
import { MessageType } from './MessageType'
import { IdUserType } from './UserType'
import { SectionMappingType } from './SectionMappingType'
import { CompetencyTagType } from './CompetencyTagType'
import { ProjectType } from './ProjectType'
import { ConversationType } from './ConversationType'

export type ModalFrameType = {
  childName: string
  isShow: boolean
  isButtonBack: boolean
  isButtonClose: boolean
  childProps: any
}

export interface ComponentsStateType {
  isLoaderOverlayVisible: boolean
  isLeftColumn: boolean
  isMainColumn: boolean
  isMainColumnBlank: boolean
  modalFrame: ModalFrameType
}

export interface FormsType {
  inputChat: Record<string, string>
  inputSearch: string
}

/**
 * @import import { RootStoreType, ComponentsStateType, FormsType, ModalFrameType } from '../@types/RootStoreType'
 */
export interface RootStoreType {
  componentsState: ComponentsStateType
  profiles: ProfileType[]
  sectionsMapping: SectionMappingType[]
  competencyTags: CompetencyTagType[]
  projects: ProjectType[]
  conversations: ConversationType[]
  messages: Omit<MessageType, 'position' | 'isTail'>[]
  forms: FormsType | any
  isLoaded: {
    isLoadedGlobalVars: boolean
  }
  globalVars: {
    idProfileHost: IdUserType
    idUserHost: IdUserType
    idProfileActive: IdUserType /** @description idUser that on the Main column are treated as active */
    theme: string
    language: string
    isShowApp: boolean
  }
}
