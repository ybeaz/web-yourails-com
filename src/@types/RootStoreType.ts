import { ProfileType } from './GraphqlTypes'
import { MessageType } from './MessageType'
import { IdUserType } from './UserType'
import { SectionMappingType } from './SectionMappingType'
import { CompetencyTagType } from './GraphqlTypes'
import { ProjectType } from './ProjectType'

export type ModalFrameType = {
  childName: string
  isShow: boolean
  isButtonBack: boolean
  isButtonClose: boolean
  childProps: any
}

export type ComponentsStateType = {
  isLoaderOverlayVisible: boolean
  isLeftColumn: boolean
  isMainColumn: boolean
  isMainColumnBlank: boolean
  isUserMenu: boolean
  isProfileSelectMenu: boolean
  modalFrame: ModalFrameType
}

export type FormsType = {
  inputChat: Record<string, string>
  inputSearch: string
}

export type UserIdDataAwsCognito = {
  cognito_groups: string[]
  email: string | null
  exp: number | null
  message: string | null
  preferred_username: string | null
  refresh_token: string | null
  sub: string | null
}

/**
 * @import import { RootStoreType, ComponentsStateType, FormsType, ModalFrameType } from '../@types/RootStoreType'
 */
export type RootStoreType = {
  componentsState: ComponentsStateType
  profiles: ProfileType[]
  sectionsMapping: SectionMappingType[]
  competencyTags: CompetencyTagType[]
  projects: ProjectType[]
  messages: Omit<MessageType, 'position' | 'isTail'>[]
  forms: FormsType
  isLoaded: {
    isLoadedGlobalVars: boolean
  }
  userIdDataAwsCognito: UserIdDataAwsCognito
  globalVars: {
    profileHostID: IdUserType
    userHostID: IdUserType
    profileActiveID: IdUserType /** @description userID that on the Main column are treated as active */
    theme: string
    language: string
    isShowApp: boolean
    navigation: any
  }
}
