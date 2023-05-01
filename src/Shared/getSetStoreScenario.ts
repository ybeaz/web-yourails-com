import { ProfileType } from '../@types/ProfileType'
import { ModalFrameType } from '../@types/RootStoreType'
import { IdUserType } from '../@types/UserType'
import { getScenarioParamsFromUrlParams } from './getScenarioParamsFromUrlParams'
import { SectionMappingType } from '../@types/SectionMappingType'
import { getComponentNameByUrlParam } from './getComponentNameByUrlParam'

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
  urlParam1?: string
  urlParam2?: string
  urlParam3?: string
  query?: { s: string }
  deviceType: DeviceType
  sectionsMappingForProfile: SectionMappingType[]
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
  sectionsMappingForProfile,
}) => {
  // const query = getParsedUrlQuery(hash)
  const showType = query && query?.s

  const {
    caseNo: caseNoUrl,
    profileName: profileNameUrl,
    isLeftColumn: isLeftColumnUrl,
    isMainColumnBlank: isMainColumnBlankUrl,
    isShowModalFrame: isShowModalFrameUrl,
    modalFrameParamName: modalFrameParamNameUrl,
    isButtonBack: isButtonBackUrl,
    isButtonClose: isButtonCloseUrl,
    redirectPathname: redirectPathnameUrl,
  } = getScenarioParamsFromUrlParams({ urlParam1, urlParam2, urlParam3, query })

  const childNameUrl = getComponentNameByUrlParam({
    sectionsMappingForProfile,
    urlParam: modalFrameParamNameUrl,
  })

  const idUserUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileNameUrl
  )?.idUser

  const modalFrameOutput: ModalFrameType = {
    ...modalFrameFalse,
    childName: childNameUrl,
    isShow: isShowModalFrameUrl,
    isButtonBack: isButtonBackUrl,
    isButtonClose: isButtonCloseUrl,
  }

  let output: GetSetStoreScenarioReturnType = {
    caseNo: caseNoUrl,
    caseDesc: '',
    isShowApp: true,
    idUser: idUserUrl,
    isLeftColumn: isLeftColumnUrl,
    isMainColumn: true,
    isMainColumnBlank: isMainColumnBlankUrl,
    modalFrame: modalFrameOutput,
    redirectPathname: redirectPathnameUrl,
  }

  /* Case 0. Hostname === 'r1.userto.com'  */
  if (hostname === 'r1.userto.com') {
    const childNameUrlR1 = getComponentNameByUrlParam({
      sectionsMappingForProfile,
      urlParam: urlParam1,
    })

    const modalFrame: ModalFrameType = {
      childName: childNameUrlR1,
      isShow: childNameUrlR1 ? true : false,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }

    output = {
      caseNo: 0,
      caseDesc: 'Hostname === r1.userto.com',
      isShowApp: true,
      idUser: '1',
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame,
      redirectPathname: undefined,
    }
  } else if (caseNoUrl === 1) {
    /* 
    Case 1. User direct link but without valid profileName and consequently unfound idUserUrl
  */
    output = {
      ...output,
      caseDesc:
        'User direct link but without valid profileName and consequently unfound idUserUrl',
    }
  } /* 
    Case 2. The Chat service Yourails.com without /k and a user in the first param of the URL
  */ else if (caseNoUrl === 2) {
    output = {
      ...output,
      caseDesc: '',
    }
  } /* 
    Case 3. The Chat service Yourails.com with /k and no second param of the URL
  */ else if (caseNoUrl === 3) {
    output = {
      ...output,
      caseDesc: '',
    }
  } /* 
    Case 4 The Chat service Yourails.com with /k, second param of the URL, but without @ as a first characted of the second param
  */ else if (caseNoUrl === 4) {
    output = {
      ...output,
      caseDesc: '',
    }
  } /* 
    Case 5. The Chat service Yourails.com with /k, second param of the URL with @ sign and with valid user
  */ else if (caseNoUrl === 5 && idUserUrl) {
    output = {
      ...output,
      caseDesc: '',
    }
  } /* 
    Case 5.2 The Chat service Yourails.com with /k, second param of the URL with @ sign and with !valid user
  */ else if (caseNoUrl === 5 && !idUserUrl) {
    output = {
      ...output,
      caseNo: 5.2,
      caseDesc: '',
      redirectPathname: `/k`,
    }
  } /* 
    Case 6 The Chat service Yourails.com without /k, first param of the URL with @ sign and with valid user
  */ else if (caseNoUrl === 6 && idUserUrl) {
    output = {
      ...output,
      caseDesc: '',
    }
  } /* 
    Case 6.2 The Chat service Yourails.com without /k, first param of the URL with @ sign and with valid user
  */ else if (caseNoUrl === 6 && !idUserUrl) {
    output = {
      ...output,
      caseNo: 6.2,
      caseDesc: '',
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
      if (!profileNameUrl || !idUserUrl) {
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
