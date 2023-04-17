import { ProfileType } from '../@types/ProfileType'
import { DeviceType } from '../YrlNativeViewLibrary'
import { ModalFrameType } from '../@types/RootStoreType'
import { idUser } from '../@types/UserType'
import { getParsedUrlQuery } from './getParsedUrlQuery'

type GetSetStoreScenarioPropsType = {
  profiles: ProfileType[]
  pathname: string
  hash: string
  deviceType: DeviceType
  isSidebarRight: boolean
  isMainColumn: boolean
}

type GetSetStoreScenarioReturnType = {
  caseNo: number
  isShowAppNext: boolean
  idUserNext: idUser
  isSidebarRightNext: boolean
  isMainColumnNext: boolean
  isMainColumnBlankNext: boolean
  modalFrameNext: ModalFrameType
}

interface GetSetStoreScenarioType {
  (props: GetSetStoreScenarioPropsType): GetSetStoreScenarioReturnType
}

/**
 * @description Function to
 * @import import { getSetStoreScenario } from '../../../Shared/getSetStoreScenario'
 */

export const getSetStoreScenario: GetSetStoreScenarioType = ({
  profiles,
  pathname,
  hash,
  deviceType,
  isSidebarRight,
  isMainColumn,
}) => {
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

  let caseNo: number
  let isShowAppNext: boolean
  let idUserNext: idUser
  let isSidebarRightNext: boolean
  let isMainColumnNext: boolean
  let isMainColumnBlankNext: boolean
  let modalFrameNext: ModalFrameType = {
    childName: 'Portfolio',
    isShow: false,
    isButtonBack: false,
    isButtonClose: false,
    childProps: {},
  }

  /* Case 1. Hostname === 'r1.userto.com' */
  if (window.location.hostname === 'r1.userto.com') {
    caseNo = 1
    isShowAppNext = true
    idUserNext = '1'

    isSidebarRightNext = false
    isMainColumnNext = true
    isMainColumnBlankNext = false

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
    idUserNext = ''

    isSidebarRightNext = true
    isMainColumnNext = true
    isMainColumnBlankNext = true
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
  } /*
    Case 9.
  */ else {
    caseNo = 9
    isShowAppNext = true
    idUserNext = ''

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

  return {
    caseNo,
    isShowAppNext,
    idUserNext,
    isSidebarRightNext,
    isMainColumnNext,
    isMainColumnBlankNext,
    modalFrameNext,
  }
}
