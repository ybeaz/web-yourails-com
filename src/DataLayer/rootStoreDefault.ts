import {
  RootStoreType,
  ComponentsStateType,
  FormsType,
} from '../@types/RootStoreType'

export const userStoreDefault: any = {
  userAvatar: '',
  userBirthYear: null,
  userDateCreated: '',
  userDateDeleted: '',
  userDateUpdated: '',
  userEmail: '',
  userGender: '',
  userIdProfile: '',
  userIdAuth: '',
  userIdExternal: '',
  userInfoAbout: '',
  userLanguages: [],
  userLocaleCity: '',
  userLocaleCountry: '',
  userLoginSource: '',
  userMedia: [],
  userName: '',
  userNameNick: '',
  userNameFirst: '',
  userNameLast: '',
  userNameMiddle: '',
  userPasswordAuth: '',
  userPasswordAuth2: '',
  userPhone: null,
  userRoles: [],
  userSkillsExpertise: [],
  userStatus: '',
  userWebLink: '',
  userWebTokenAuth: '',
  userTimeZone: '',
}

export const componentsStateDefault: ComponentsStateType = {
  isLoaderOverlayVisible: false,
  isSidebarRight: false,
  isMainColumn: true,
  modalFrame: {
    childName: 'Portfolio', // Portfolio, Profile TagsProperties
    isShow: false,
    childProps: {},
  },
}

export const formsDefault: FormsType = {}

export const rootStoreDefault: RootStoreType = {
  componentsState: componentsStateDefault,
  users: [],
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: false,
  },
  globalVars: {
    idUserHost: '1',
    theme: 'light',
    language: 'en',
  },
}
