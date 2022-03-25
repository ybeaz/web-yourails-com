import { IUser } from './IUser'
export interface IComponentsState {
  modalFrames: { childName: string; isActive: boolean; childProps: any }[]
}

export interface IForms {
  searchInput: string
  userPrev: IUser
  user: IUser
}

export interface IRootStore {
  componentsState: IComponentsState
  users: IUser[]
  forms: IForms
  isLoaded: {
    isLoadedGlobalVars: boolean
  }
  globalVars: {
    theme: string
    language: string
  }
}
