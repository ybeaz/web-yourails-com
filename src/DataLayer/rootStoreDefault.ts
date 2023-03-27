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

export const componentsStateDefault: any = {
  isLoaderOverlayVisible: false,
  modalFrame: {
    childName: 'Profile',
    isShow: true,
    childProps: {},
  },
}

export const formsDefault: any = {
  searchInput: '',
  userPrev: userStoreDefault,
  user: userStoreDefault,
}

export const rootStoreDefault: any = {
  componentsState: componentsStateDefault,
  users: [],
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: false,
  },
  globalVars: {
    theme: 'Dark',
    // language: localStorage ? localStorage?.getItem('language') || 'en' : 'en',
  },
}
