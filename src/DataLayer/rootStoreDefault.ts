export const rootStoreDefault = {
  analyticsID: null,
  componentsState: {
    questionsSlideNumber: 0,
    isModalFrameVisible: false,
    isSideNavVisible: false,
    isLoaderOverlayVisible: false,
    isDocumentAdded: false,
    isCourseStarted: false,
    modalFrames: [
      {
        childName: 'AuthUser',
        isActive: true,
        childProps: {
          scenario: { branch: 'signIn', step: '' },
        },
      },
    ],
  },
  courses: [],
  documents: [],
  globalVars: {
    numberQuestionsInSlide: 2,
  },
  forms: {
    emailAuth: '',
    passwordAuth: '',
    passwordAuth2: '',
    searchInput: '',
    firstName: '',
    middleName: '',
    lastName: '',
    sendTo: '',
    sendCc: '',
  },
  isLoaded: {
    isLoadedGlobalVars: false,
    isLoadedCourses: false,
    mediaLoading: {},
  },
  language: 'ru',
  user: {
    email: undefined,
    roles: undefined,
    uid: undefined,
    status: undefined,
    userName: undefined,
    webToken: undefined,
  },
}
