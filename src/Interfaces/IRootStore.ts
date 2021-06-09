export interface IRootStore {
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
    mediaLoading: any
  }
  courses: any[]
  globalVars: any
  componentsState: {
    questionsSlideNumber: number
    isModalFrameVisible: boolean
    isSideNavVisible: boolean
    isLoaderOverlayVisible: boolean
    isDocumentAdded: boolean
    isCourseStarted: boolean
  }
  forms: {
    searchInput: string
    firstName: string
    middleName: string
    lastName: string
    sendTo: string
    sendCc: string
  }
  documents: any[]
  language: string
  analyticsID: string
}
