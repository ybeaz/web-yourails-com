import { ProfileType } from '../@types/ProfileType'
import { ModalFrameType } from '../@types/RootStoreType'
import { IdUserType } from '../@types/UserType'
import { getParsedUrlQuery } from './getParsedUrlQuery'

export enum DeviceType {
  xsDevice = 'xsDevice',
  smDevice = 'smDevice',
  mdDevice = 'mdDevice',
  lgDevice = 'lgDevice',
  xlDevice = 'xlDevice',
}

type GetSetStoreScenarioPropsType = {
  profiles: ProfileType[]
  hostname: string
  pathname: string
  hash: string
  deviceType: DeviceType
}

type GetSetStoreScenarioReturnType = {
  caseNo: number
  caseDesc: string
  isShowApp: boolean
  idUser: IdUserType
  isLeftColumn: boolean
  isMainColumn: boolean
  isMainColumnBlank: boolean
  modalFrame: ModalFrameType
  redirectPathname: string | undefined
  redirectHash: string | undefined
}

interface GetSetStoreScenarioType {
  (props: GetSetStoreScenarioPropsType): GetSetStoreScenarioReturnType
}

export const modalFrameFalse: ModalFrameType = {
  childName: 'Portfolio' /** @options [Portfolio, Profile CompetencyTags] */,
  isShow: false,
  isButtonBack: true,
  isButtonClose: true,
  childProps: {},
}

export const modalFrameTrue = {
  childName: 'Portfolio',
  isShow: true,
  isButtonBack: false,
  isButtonClose: false,
  childProps: {},
}

/**
 * @description Function to
 * @import import { getSetStoreScenario } from '../../../Shared/getSetStoreScenario'
 */

export const getSetStoreScenario: GetSetStoreScenarioType = ({
  profiles,
  hostname,
  pathname,
  hash,
  deviceType,
}) => {
  const query = getParsedUrlQuery(hash)
  const { s: showType, profileName } = query

  const profileUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileName
  )

  const idUserUrl = profileUrl?.idUser

  let output: GetSetStoreScenarioReturnType = {
    caseNo: 0,
    caseDesc: '',
    isShowApp: true,
    idUser: 0,
    isLeftColumn: false,
    isMainColumn: true,
    isMainColumnBlank: false,
    modalFrame: modalFrameFalse,
    redirectPathname: undefined,
    redirectHash: undefined,
  }

  /* Case 1. Hostname === 'r1.userto.com'  */
  if (hostname === 'r1.userto.com') {
    const modalFrame = {
      childName: 'Portfolio',
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }

    output = {
      caseNo: 1,
      caseDesc: 'Hostname === r1.userto.com',
      isShowApp: true,
      idUser: '1',
      isLeftColumn: false,
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
      isShowApp: true,
      idUser: undefined,
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: true,
      modalFrame: modalFrameFalse,
      redirectPathname: `/k`,
      redirectHash: '',
    }
  } /*
    Case 3. User direct link without chat and Business Card only and without left column
  */ else if (
    pathname === '/' &&
    profileName &&
    idUserUrl &&
    showType === 'bc'
  ) {
    output = {
      caseNo: 3,
      caseDesc:
        'User direct link without chat and Business Card only and without left column',
      isShowApp: true,
      idUser: idUserUrl,
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameTrue,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  } /* 
    Case 4. User direct link with chat and without left column
  */ else if (
    pathname === '/' &&
    profileName &&
    idUserUrl &&
    showType === undefined
  ) {
    output = {
      caseNo: 4,
      caseDesc: 'User direct link with chat and without left column',
      isShowApp: true,
      idUser: idUserUrl,
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  } /* 
    Case 5. The Chat service Yourails.com without valid user with the left column
  */ else if (pathname === '/k' && (!profileName || !idUserUrl)) {
    output = {
      caseNo: 5,
      caseDesc:
        'The Chat service Yourails.com without valid user without selected user with the left column',
      isShowApp: true,
      idUser: undefined,
      isLeftColumn: true,
      isMainColumn: true,
      isMainColumnBlank: true,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  } /*
    Case 6. The Chat service Yourails.com with selected user with the left column
  */ else if (pathname === '/k' && profileName && idUserUrl) {
    output = {
      caseNo: 6,
      caseDesc:
        'The Chat service Yourails.com with selected user with the left column',
      isShowApp: true,
      idUser: idUserUrl,
      isLeftColumn: true,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameFalse,
      redirectPathname: undefined,
      redirectHash: undefined,
    }
  }

  /**
   * @comment Block to manage screen width/ devices specifities
   */
  if (pathname === '/k') {
    if (
      deviceType === DeviceType['mdDevice'] ||
      deviceType === DeviceType['lgDevice'] ||
      deviceType === DeviceType['xlDevice']
    ) {
      output = { ...output, isLeftColumn: true, isMainColumn: true }
    } else {
      if (!profileName || !idUserUrl) {
        output = { ...output, isLeftColumn: true, isMainColumn: false }
      } else {
        output = {
          ...output,
          isLeftColumn: false,
          isMainColumn: true,
        }
      }
    }
  }

  return output
}
