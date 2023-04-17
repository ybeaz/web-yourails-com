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
  caseDesc: string
  isShowApp: boolean
  idUser: idUser
  isSidebarRight: boolean
  isMainColumn: boolean
  isMainColumnBlank: boolean
  modalFrame: ModalFrameType
  redirectPathname: string | undefined
  redirectHash: string | undefined
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

  let output: GetSetStoreScenarioReturnType

  let modalFrameFalse: ModalFrameType = {
    childName: 'Portfolio',
    isShow: false,
    isButtonBack: false,
    isButtonClose: false,
    childProps: {},
  }

  /* Case 1. Hostname === 'r1.userto.com' */
  if (window.location.hostname === 'r1.userto.com') {
    const modalFrame = {
      childName: 'Portfolio', // Portfolio, Profile CompetencyTags
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }

    output = {
      caseNo: 1,
      caseDesc: 'Hostname === r1.userto.com',
      isShowApp: true,
      idUser: 1,
      isSidebarRight: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  } /* 
    Case 2. User direct link but without valid profileName and consequently unfound idUserUrl
  */ else if (pathname === '/' && !idUserUrl) {
    output = {
      caseNo: 2,
      caseDesc:
        'User direct link but without valid profileName and consequently unfound idUserUrl',
      isShowApp: false,
      idUser: undefined,
      isSidebarRight: false,
      isMainColumn: true,
      isMainColumnBlank: true,
      modalFrame: modalFrameFalse,
      redirectPathname: `/k`,
      redirectHash: '',
    }
  } /*
    Case 3. User direct link without chat and Business Card only and without right column
  */ else if (
    pathname === '/' &&
    profileName &&
    idUserUrl &&
    showType === 'bc'
  ) {
    const modalFrameNext = {
      childName: 'Portfolio',
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }

    output = {
      caseNo: 3,
      caseDesc:
        'User direct link without chat and Business Card only and without right column',
      isShowApp: true,
      idUser: idUserUrl,
      isSidebarRight: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameNext,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  } /* 
    Case 4. User direct link with chat and without right column
  */ else if (
    pathname === '/' &&
    profileName &&
    idUserUrl &&
    showType === undefined
  ) {
    output = {
      caseNo: 4,
      caseDesc: 'User direct link with chat and without right column',
      isShowApp: true,
      idUser: idUserUrl,
      isSidebarRight: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
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
    output = {
      caseNo: 5,
      caseDesc:
        'The Chat service Yourails.com without valid user with the right column',
      isShowApp: true,
      idUser: '',
      isSidebarRight: true,
      isMainColumn: true,
      isMainColumnBlank: true,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
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
    output = {
      caseNo: 6,
      caseDesc:
        'The Chat service Yourails.com without selected user with the right column',
      isShowApp: true,
      idUser: idUserUrl,
      isSidebarRight: true,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
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
    output = {
      caseNo: 7,
      caseDesc:
        'The Chat service Yourails.com without selected user without the right column',
      isShowApp: true,
      idUser: idUserUrl,
      isSidebarRight: true,
      isMainColumn: false,
      isMainColumnBlank: false,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  } /*
    Case 8. 
   */ else if (
    pathname === '/k' &&
    profileName &&
    idUserUrl &&
    deviceType === DeviceType['smDevice']
  ) {
    output = {
      caseNo: 8,
      caseDesc: '???',
      isShowApp: true,
      idUser: idUserUrl,
      isSidebarRight: true,
      isMainColumn: false,
      isMainColumnBlank: false,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  } /*
    Case 9.
  */ else {
    // caseNo = 9
    // isShowAppNext = true
    // idUserNext = ''

    // if (isSidebarRight && isMainColumn) {
    //   isSidebarRightNext = false
    //   isMainColumnNext = true
    //   isMainColumnBlankNext = false
    // } else {
    //   isSidebarRightNext = isSidebarRight
    //   isMainColumnNext = isMainColumn
    //   isMainColumnBlankNext = false
    // }

    output = {
      caseNo: 9,
      caseDesc: '???',
      isShowApp: true,
      idUser: idUserUrl,
      isSidebarRight: true,
      isMainColumn: false,
      isMainColumnBlank: false,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  }

  return output
}
