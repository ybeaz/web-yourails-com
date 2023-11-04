import {
  RootStoreType,
  ComponentsStateType,
  FormsType,
} from '../@types/RootStoreType'

export const profileStoreDefault: any = {
  profileAvatar: '',
  profileBirthYear: null,
  profileDateCreated: '',
  profileDateDeleted: '',
  profileDateUpdated: '',
  profileEmail: '',
  profileGender: '',
  profileIdProfile: '',
  profileIdAuth: '',
  profileIdExternal: '',
  profileInfoAbout: '',
  profileLanguages: [],
  profileLocaleCity: '',
  profileLocaleCountry: '',
  profileLoginSource: '',
  profileMedia: [],
  profileName: '',
  profileNameNick: '',
  profileNameFirst: '',
  profileNameLast: '',
  profileNameMiddle: '',
  profilePasswordAuth: '',
  profilePasswordAuth2: '',
  profilePhone: null,
  profileRoles: [],
  profileSkillsExpertise: [],
  profileStatus: '',
  profileWebLink: '',
  profileWebTokenAuth: '',
  profileTimeZone: '',
}

export const componentsStateR1: ComponentsStateType = {
  isLoaderOverlayVisible: false,
  isLeftColumn: false,
  isMainColumn: true,
  isMainColumnBlank: false,
  isUserMenu: false,
  isProfileSelectMenu: false,
  modalFrame: {
    childName: 'Portfolio', // Portfolio, Profile CompetencyTags
    isShow: true,
    isButtonBack: true,
    isButtonClose: true,
    childProps: {},
  },
}

export const componentsStateDefault: ComponentsStateType = {
  isLoaderOverlayVisible: false,
  isLeftColumn: false,
  isMainColumn: false,
  isMainColumnBlank: true,
  isUserMenu: false,
  isProfileSelectMenu: false,
  modalFrame: {
    childName: 'Portfolio', // Portfolio, Profile CompetencyTags
    isShow: false,
    isButtonBack: true,
    isButtonClose: true,
    childProps: {},
  },
}

export const formsDefault: FormsType = {
  inputChat: {},
  inputSearch: '',
}

export const rootStoreDefault: RootStoreType = {
  componentsState:
    window?.location?.hostname === 'r1.userto.com'
      ? componentsStateR1
      : componentsStateDefault,
  profiles: [],
  sectionsMapping: [],
  competencyTags: [],
  projects: [],
  messages: [],
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: false,
  },
  userIdDataAwsCognito: {
    cognito_groups: [],
    email: null,
    exp: 0,
    message: null,
    preferred_username: null,
    refresh_token: null,
    sub: null,
  },
  globalVars: {
    idUserHost: '0',
    idProfileHost: '0',
    idProfileActive: undefined,
    theme: 'light',
    language: 'en',
    isShowApp: true,
    navigation: undefined,
  },
}

export const rootStoreDefault2: any = {}
