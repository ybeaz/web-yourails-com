import { UserType } from './UserType'

export interface ComponentsStateType {
  isLoaderOverlayVisible: boolean
  modalFrame: { childName: string; isActive: boolean; childProps: any }
}

export interface FormsType {
  searchInput: string
  userPrev: UserType
  user: UserType
  [key: string]: any
}

/**
 * @import import { RootStoreType } from '../@types/RootStoreType'
 */
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
