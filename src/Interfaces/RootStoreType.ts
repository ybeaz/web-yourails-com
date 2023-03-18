import { UserType } from './UserType'
export interface ComponentsStateType {
  isLoaderOverlayVisible: boolean
  modalFrames: { childName: string; isActive: boolean; childProps: any }[]
}

export interface FormsType {
  searchInput: string
  userPrev: UserType
  user: UserType
  [key: string]: any
}

export interface RootStoreType {
  componentsState: ComponentsStateType
  users: UserType[]
  forms: FormsType | any
  isLoaded: {
    isLoadedGlobalVars: boolean
  }
  globalVars: {
    theme: string
    language: string
  }
}
