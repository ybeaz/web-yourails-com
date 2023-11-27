import { ProfileType } from '../@types/GraphqlTypes'
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
  idUserHost: IdUserType
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
  caseConditions: string
  caseDesc: string
  isShowApp: boolean
  idUserHost: IdUserType
  userID: IdUserType
  profileID: IdUserType
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
  idUserHost,
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
    caseConditions: caseConditionsUrl,
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

  const profileUrl = profiles.find(
    (profile: ProfileType) => profile.profileName === profileNameUrl
  )

  const idUserUrl = profileUrl?.userID
  const idProfileUrl = profileUrl?.profileID

  const modalFrameOutput: ModalFrameType = {
    ...modalFrameFalse,
    childName: childNameUrl,
    isShow: isShowModalFrameUrl,
    isButtonBack: isButtonBackUrl,
    isButtonClose: isButtonCloseUrl,
  }

  let caseDesc = ''

  let output: GetSetStoreScenarioReturnType = {
    caseNo: caseNoUrl,
    caseConditions: caseConditionsUrl,
    caseDesc,
    isShowApp: true,
    idUserHost,
    userID: idUserUrl,
    profileID: idProfileUrl,
    isLeftColumn: isLeftColumnUrl,
    isMainColumn: true,
    isMainColumnBlank: isMainColumnBlankUrl,
    modalFrame: modalFrameOutput,
    redirectPathname: redirectPathnameUrl,
  }

  if (hostname === 'r1.userto.com') {
    caseDesc = 'Hostname === r1.userto.com'

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
      caseConditions: "+ hostname === 'r1.userto.com'",
      caseDesc,
      isShowApp: true,
      idUserHost: '1',
      userID: '1',
      profileID: '1',
      isLeftColumn: false,
      isMainColumn: true,
      isMainColumnBlank: false,
      modalFrame,
      redirectPathname: undefined,
    }
  } else if (caseNoUrl === 1) {
    caseDesc =
      'User direct link but without valid profileName and consequently unfound idUserUrl'
    output = {
      ...output,
      caseDesc,
    }
  } else if (caseNoUrl === 7) {
    caseDesc =
      'The Chat service Yourails.com about in the first param of the URL'
    output = {
      ...output,
      caseDesc,
    }
  } else if (caseNoUrl === 2) {
    caseDesc =
      'The Chat service Yourails.com without /k and a user in the first param of the URL'
    output = {
      ...output,
      caseDesc,
    }
  } else if (caseNoUrl === 3) {
    caseDesc =
      'The Chat service Yourails.com with /k and no second param of the URL'
    output = {
      ...output,
      caseDesc,
    }
  } else if (caseNoUrl === 4) {
    caseDesc =
      'The Chat service Yourails.com with /k, second param of the URL, but without @ as a first characted of the second param'
    output = {
      ...output,
      caseDesc,
    }
  } else if ((caseNoUrl === 5 || caseNoUrl === 5.5) && idUserUrl) {
    caseDesc =
      'The Chat service Yourails.com with /k, second param of the URL with @ sign and with valid user'
    output = {
      ...output,
      caseConditions: `(caseNoUrl === 5 || caseNoUrl === 5.5) && idUserUrl) << ${caseConditionsUrl}`,
      caseDesc,
    }
  } else if ((caseNoUrl === 5 || caseNoUrl === 5.5) && !idUserUrl) {
    caseDesc =
      'The Chat service Yourails.com with /k, second param of the URL with @ sign and with !valid user'

    const redirectPathnameNext = profiles.length ? '/k' : undefined

    output = {
      ...output,
      caseNo: 5.2,
      caseConditions: `(caseNoUrl === 5 || caseNoUrl === 5.5) && !idUserUrl << ${caseConditionsUrl}`,
      caseDesc,
      redirectPathname: redirectPathnameNext,
      isMainColumn: false,
    }
  } else if (
    (caseNoUrl === 6 || caseNoUrl === 6.5 || caseNoUrl === 6.7) &&
    idUserUrl
  ) {
    caseDesc =
      'The Chat service Yourails.com without /k, first param of the URL with @ sign and with valid user'

    output = {
      ...output,
      caseConditions: `(caseNoUrl === 6 || caseNoUrl === 6.5 || caseNoUrl === 6.7) && idUserUrl << ${caseConditionsUrl}`,
      caseDesc,
    }
  } else if (
    (caseNoUrl === 6 || caseNoUrl === 6.5 || caseNoUrl === 6.7) &&
    !idUserUrl
  ) {
    caseDesc =
      'The Chat service Yourails.com without /k, first param of the URL with @ sign and with valid user'

    const redirectPathnameNext = profiles.length ? '/k' : undefined

    output = {
      ...output,
      caseNo: 6.2,
      caseConditions: `(caseNoUrl === 6 || caseNoUrl === 6.5 || caseNoUrl === 6.7) && !idUserUrl << ${caseConditionsUrl}`,
      caseDesc,
      redirectPathname: redirectPathnameNext,
      isMainColumn: false,
    }
  }

  /**
   * @comment Block to manage screen width/ devices specifities
   */
  if (urlParam1 === 'k' && (caseNoUrl === 3 || idUserUrl)) {
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
