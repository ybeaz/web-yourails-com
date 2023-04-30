import { ProfileType } from '../@types/ProfileType'
import { ModalFrameType } from '../@types/RootStoreType'
import { IdUserType } from '../@types/UserType'

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
  urlParam1: string
  urlParam2: string
  urlParam3: string
  query: { s: string }
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

export const modalFrameTrue: ModalFrameType = {
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
  urlParam1,
  urlParam2,
  urlParam3,
  query,
  deviceType,
}) => {
  // const query = getParsedUrlQuery(hash)
  const { s: showType } = query

  const getScenarioParamsFromUrlParams = (
    urlParam1: string,
    urlParam2: string,
    urlParam3: string
  ): {
    isChatApp: boolean
    profileName: string | undefined
    modalFrameChildName: string
    isShowModalFrame: boolean
  } => {
    let isChatApp = false
    if (urlParam1 === 'k') isChatApp = true

    let profileName = undefined
    let modalFrameChildName = ''
    let isShowModalFrame = false

    if (urlParam1 && urlParam1[0] === '@') {
      profileName = urlParam1
      if (urlParam2) {
        modalFrameChildName = 'Portfolio'
        isShowModalFrame = true
      }
    } else if (urlParam2 && urlParam2[0] === '@') {
      profileName = urlParam2
      if (urlParam3) {
        modalFrameChildName = 'Portfolio'
        isShowModalFrame = true
      }
    }

    console.info('getSetStoreScenario [103]', {
      urlParam1,
      urlParam2,
      urlParam3,
      isChatApp,
      profileName,
      modalFrameChildName,
      isShowModalFrame,
    })

    return { isChatApp, profileName, modalFrameChildName, isShowModalFrame }
  }

  const { isChatApp, profileName, modalFrameChildName, isShowModalFrame } =
    getScenarioParamsFromUrlParams(urlParam1, urlParam2, urlParam3)

  const profileUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileName
  )

  const idUserUrl = profileUrl?.idUser

  const modalFrameOutput: ModalFrameType = {
    ...modalFrameFalse,
    childName: modalFrameChildName,
    isShow: isShowModalFrame,
  }

  let output: GetSetStoreScenarioReturnType = {
    caseNo: 0,
    caseDesc: '',
    isShowApp: true,
    idUser: 0,
    isLeftColumn: false,
    isMainColumn: true,
    isMainColumnBlank: false,
    modalFrame: modalFrameOutput,
    redirectPathname: undefined,
  }

  /* Case 1. Hostname === 'r1.userto.com'  */
  if (hostname === 'r1.userto.com') {
    const modalFrame: ModalFrameType = {
      childName: modalFrameChildName,
      isShow: isShowModalFrame,
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
    }
  } /* 
    Case 2. User direct link but without valid profileName and consequently unfound idUserUrl
  */ else if (!urlParam1 || !idUserUrl) {
    output = {
      caseNo: 2,
      caseDesc:
        'User direct link but without valid profileName and consequently unfound idUserUrl',
      isShowApp: true,
      idUser: undefined,
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: true,
      modalFrame: modalFrameOutput,
      redirectPathname: `/k`,
    }
  } /*
    Case 3. User direct link without chat and Business Card only and without left column
  */ else if (!urlParam2 && profileName && idUserUrl && showType === 'bc') {
    output = {
      caseNo: 3,
      caseDesc:
        'User direct link without chat and Business Card only and without left column',
      isShowApp: true,
      idUser: idUserUrl,
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameOutput,
      redirectPathname: undefined,
    }
  } /* 
    Case 4. User direct link with chat and without left column
  */ else if (!urlParam2 && profileName && idUserUrl && !showType) {
    output = {
      caseNo: 4,
      caseDesc: 'User direct link with chat and without left column',
      isShowApp: true,
      idUser: idUserUrl,
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameOutput,
      redirectPathname: undefined,
    }
  } /* 
    Case 5. The Chat service Yourails.com without valid user with the left column
  */ else if (urlParam1 === 'k' && (!profileName || !idUserUrl)) {
    output = {
      caseNo: 5,
      caseDesc:
        'The Chat service Yourails.com without valid user without selected user with the left column',
      isShowApp: true,
      idUser: undefined,
      isLeftColumn: true,
      isMainColumn: true,
      isMainColumnBlank: true,
      modalFrame: modalFrameOutput,
      redirectPathname: undefined,
    }
  } /*
    Case 6. The Chat service Yourails.com with selected user with the left column
  */ else if (urlParam1 === 'k' && profileName && idUserUrl) {
    output = {
      caseNo: 6,
      caseDesc:
        'The Chat service Yourails.com with selected user with the left column',
      isShowApp: true,
      idUser: idUserUrl,
      isLeftColumn: true,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame: modalFrameOutput,
      redirectPathname: undefined,
    }
  }

  /**
   * @comment Block to manage screen width/ devices specifities
   */
  if (urlParam1 === 'k') {
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

  console.info('getSetStoreScenario [254]', {
    isChatApp,
    profileName,
    modalFrameChildName,
    isShowModalFrame,
    idUserUrl,
    profileUrl,
    showType,
    output,
  })

  return output
}
