import { ProfileType } from './ProfileType'

export interface ComponentsStateType {
  isLoaderOverlayVisible: boolean
  isSidebarRight: boolean
  isMainColumn: boolean
  modalFrame: {
    childName: string
    isShow: boolean
    isButtonBack: boolean
    isButtonClose: boolean
    childProps: any
  }
}

export interface FormsType {}

/**
 * @import import { RootStoreType, ComponentsStateType, FormsType } from '../@types/RootStoreType'
 */
export interface RootStoreType {
  componentsState: ComponentsStateType
  profiles: ProfileType[]
  forms: FormsType | any
  isLoaded: {
    isLoadedGlobalVars: boolean
  }
  globalVars: {
    idUserHost: string
    theme: string
    language: string
    isShowApp: boolean
  }
}
