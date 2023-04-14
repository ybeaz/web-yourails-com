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

export const componentsStateDefault: ComponentsStateType = {
  isLoaderOverlayVisible: false,
  isSidebarRight: false,
  isMainColumn: true,
  modalFrame: {
    childName: 'CompetencyTags', // Portfolio, Profile CompetencyTags
    isShow: true,
    isButtonBack: true,
    isButtonClose: true,
    childProps: {},
  },
}

export const formsDefault: FormsType = {}

export const rootStoreDefault: RootStoreType = {
  componentsState: componentsStateDefault,
  profiles: [],
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
