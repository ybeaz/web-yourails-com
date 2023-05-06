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
  modalFrame: {
    childName: 'Portfolio', // Portfolio, Profile CompetencyTags
    isShow: false,
    isButtonBack: true,
    isButtonClose: true,
    childProps: {},
  },
}

export const formsDefault: FormsType = {}

export const rootStoreDefault: RootStoreType = {
  componentsState:
    window.location.hostname === 'r1.userto.com'
      ? componentsStateR1
      : componentsStateDefault,
  profiles: [],
  messages: [],
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: false,
  },
  globalVars: {
    idUserHost: '1',
    idProfileHost: '1',
    idProfileActive: '1',
    theme: 'light',
    language: 'en',
    isShowApp: true,
  },
}
