export interface IUser {
  userAvatar: string
  userBirthYear: number
  userDateCreated: string
  userDateDeleted: string
  userDateUpdated: string
  userEmail: string
  userGender: string
  userIdProfile: string
  userIdAuth: string
  userIdExternal: string
  userInfoAbout: string
  userLanguages: string[]
  userLocaleCity: string
  userLocaleCountry: string
  userLoginSource: string
  userMedia: string[]
  userName: string
  userNameNick: string
  userNameFirst: string
  userNameLast: string
  userNameMiddle: string
  userPasswordAuth: string
  userPasswordAuth2: string
  userPhone: number
  userRoles: string[]
  userSkillsExpertise: string[]
  userStatus: string
  userWebLink: string
  userWebTokenAuth: string
  userZoneInfo: string
}

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
