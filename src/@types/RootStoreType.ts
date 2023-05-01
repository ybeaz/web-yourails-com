import { ProfileType } from './ProfileType'
import { MessageType } from './MessageType'

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

export interface FormsType {}

/**
 * @import import { RootStoreType, ComponentsStateType, FormsType, ModalFrameType } from '../@types/RootStoreType'
 */
export interface RootStoreType {
  componentsState: ComponentsStateType
  profiles: ProfileType[]
  messages: Omit<MessageType, 'position' | 'isTail'>[]
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
