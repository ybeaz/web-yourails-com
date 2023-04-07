import { UserType } from './UserType'

export interface ComponentsStateType {
  isLoaderOverlayVisible: boolean
  modalFrame: { childName: string; isShow: boolean; childProps: any }
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
    idUserHost: string
    theme: string
    language: string
  }
}
