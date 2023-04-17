import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { ProfileType } from '../../@types/ProfileType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { DeviceType } from '../../YrlNativeViewLibrary'

const { dispatch, getState } = store

/**
 * @description Handle to setup initial data based on the device type and URL
  xsDevice = DeviceTypeIn['xsDevice'],
  smDevice = DeviceTypeIn['smDevice'],
  mdDevice = DeviceTypeIn['mdDevice'],
  lgDevice = DeviceTypeIn['lgDevice'],
  xlDevice = DeviceTypeIn['xlDevice'],
 */

export const SET_STORE_SCENARIO: ActionEventType = (
  event,
  dataHandle: {
    pathname: string
    hash: string
    deviceType: DeviceType
  }
) => {
  const { pathname, hash, deviceType } = dataHandle

  const {
    componentsState: { isSidebarRight, isMainColumn },
    globalVars: { idUserHost },
    profiles,
  } = getState()

  const query = getParsedUrlQuery(hash)
  const { s: showType, profileName } = query

  const profileUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileName
  )

  const idUserUrl = profileUrl?.idUser
  console.info('SET_STORE_SCENARIO [19]', {
    pathname,
    profileName,
    idUserUrl,
    showType,
    deviceType,
  })

  let caseNo
  let isShowAppNext
  let idUserNext
  let isSidebarRightNext
  let isMainColumnNext
  let isMainColumnBlankNext
  let modalFrameNext

  /* Case 1. Hostname === 'r1.userto.com' */
  if (window.location.hostname === 'r1.userto.com') {
    caseNo = 1
    isShowAppNext = true
    idUserNext = '1'

    isSidebarRightNext = false
    isMainColumnNext = true

    modalFrameNext = {
      childName: 'Portfolio', // Portfolio, Profile CompetencyTags
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } /* 
    Case 2. User direct link but without valid profileName and consequently unfound idUserUrl
  */ else if (pathname === '/' && !idUserUrl) {
    caseNo = 2
    isShowAppNext = false
    idUserNext = ''

    isSidebarRightNext = false
    isMainColumnNext = true
    isMainColumnBlankNext = true

    modalFrameNext = {
      childName: 'Portfolio',
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } /*
    Case 3. User direct link without chat and Business Card only and without right column
  */ else if (
    pathname === '/' &&
    profileName &&
    idUserUrl &&
    showType === 'bc'
  ) {
    caseNo = 3
    isShowAppNext = true
    idUserNext = idUserUrl

    isSidebarRightNext = false
    isMainColumnNext = true
    isMainColumnBlankNext = false

    modalFrameNext = {
      childName: 'Portfolio',
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } /* 
    Case 4. User direct link with chat and without right column
  */ else if (
    pathname === '/' &&
    profileName &&
    idUserUrl &&
    showType === undefined
  ) {
    caseNo = 4
    isShowAppNext = true
    idUserNext = idUserUrl

    isSidebarRightNext = false
    isMainColumnNext = true
    isMainColumnBlankNext = false

    modalFrameNext = {
      childName: 'Portfolio',
      isShow: false,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } /* 
    Case 5. The Chat service Yourails.com without valid user with the right column
  */ else if (
    pathname === '/k' &&
    (!profileName || !idUserUrl) &&
    (deviceType === DeviceType['mdDevice'] ||
      deviceType === DeviceType['lgDevice'] ||
      deviceType === DeviceType['xlDevice'])
  ) {
    caseNo = 5
    isShowAppNext = true
    idUserNext = idUserUrl

    isSidebarRightNext = true
    isMainColumnNext = true
    isMainColumnBlankNext = true

    modalFrameNext = {
      childName: 'Portfolio',
      isShow: false,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } else if (
    /*
    Case 6. The Chat service Yourails.com without selected user with the right column
  */
    pathname === '/k' &&
    profileName &&
    idUserUrl &&
    (deviceType === DeviceType['mdDevice'] ||
      deviceType === DeviceType['lgDevice'] ||
      deviceType === DeviceType['xlDevice'])
  ) {
    caseNo = 6
    isShowAppNext = true
    idUserNext = idUserUrl

    isSidebarRightNext = true
    isMainColumnNext = true
    isMainColumnBlankNext = false

    modalFrameNext = {
      childName: 'Portfolio',
      isShow: false,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } /* 
    Case 7. The Chat service Yourails.com without selected user without the right column
  */ else if (
    pathname === '/k' &&
    profileName &&
    idUserUrl &&
    (deviceType === DeviceType['smDevice'] ||
      deviceType === DeviceType['xsDevice'])
  ) {
    caseNo = 7
    isShowAppNext = true
    idUserNext = idUserUrl

    isSidebarRightNext = true
    isMainColumnNext = false
    isMainColumnBlankNext = false

    modalFrameNext = {
      childName: 'Portfolio',
      isShow: false,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } /*
    Case 8. 
   */ else if (
    pathname === '/k' &&
    profileName &&
    idUserUrl &&
    deviceType === DeviceType['smDevice']
  ) {
    caseNo = 8
    isShowAppNext = true
    idUserNext = idUserUrl

    isSidebarRightNext = true
    isMainColumnNext = false
    isMainColumnBlankNext = false

    modalFrameNext = {
      childName: 'Portfolio',
      isShow: false,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }
  } /*
    Case 9.
  */ else {
    caseNo = 9
    isShowAppNext = true
    idUserNext = idUserUrl

    if (isSidebarRight && isMainColumn) {
      isSidebarRightNext = false
      isMainColumnNext = true
      isMainColumnBlankNext = false
    } else {
      isSidebarRightNext = isSidebarRight
      isMainColumnNext = isMainColumn
      isMainColumnBlankNext = false
    }
  }

  console.info('SET_STORE_SCENARIO [215]', {
    caseNo,
    isShowAppNext,
    idUserNext,
    isSidebarRightNext,
    isMainColumnNext,
    isMainColumnBlankNext,
    modalFrameNext,
  })

  dispatch(actionSync.TOGGLE_IS_SHOW_GLOBAL(isShowAppNext))
  dispatch(actionSync.TOGGLE_SIDEBAR_RIGHT(isSidebarRightNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN(isMainColumnNext))
  dispatch(actionSync.TOGGLE_IS_MAIN_COLUMN_BLANK(isMainColumnBlankNext))
  dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))

  if (idUserHost === idUserNext) return

  dispatch(
    actionSync.SET_ID_USER_HOST({
      idUser: idUserNext,
    })
  )

  // if (window.location.hostname === 'r1.userto.com') {
  //   modalFrameNext = {
  //     childName: 'Portfolio', // Portfolio, Profile CompetencyTags
  //     isShow: true,
  //     isButtonBack: false,
  //     isButtonClose: false,
  //     childProps: {},
  //   }
  //   dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  // } else

  // if (showType === 'bc') {
  //   modalFrameNext = {
  //     childName: 'Portfolio',
  //     isShow: true,
  //     isButtonBack: false,
  //     isButtonClose: false,
  //     childProps: {},
  //   }
  //   dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  // } else if (showType === 'ct') {
  //   modalFrameNext = {
  //     childName: 'Portfolio',
  //     isShow: false,
  //     isButtonBack: true,
  //     isButtonClose: true,
  //     childProps: {},
  //   }
  //   dispatch(actionSync.SET_MODAL_FRAME(modalFrameNext))
  // } else {
  //   console.info('SET_STORE_SCENARIO [71]', { showType })
  //   dispatch(actionSync.TOGGLE_IS_SHOW_GLOBAL(false))
  // }
}
