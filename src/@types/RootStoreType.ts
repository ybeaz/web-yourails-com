import { ProfileType } from './ProfileType'

export type ModalFrameType = {
  childName: string
  isShow: boolean
  isButtonBack: boolean
  isButtonClose: boolean
  childProps: any
}

export interface ComponentsStateType {
  isLoaderOverlayVisible: boolean
  isSidebarRight: boolean
  isMainColumn: boolean
  isMainColumnBlank: boolean
  modalFrame: ModalFrameType
}

export interface FormsType {}

/**
 * @import import { RootStoreType, ComponentsStateType, FormsType, ModalFrameType } from '../@types/RootStoreType'
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
