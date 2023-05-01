type GetScenarioParamsFromUrlParamsPropsType = {
  urlParam1?: string
  urlParam2?: string
  urlParam3?: string
  query?: any
}

interface GetScenarioParamsFromUrlParamsType {
  (props: GetScenarioParamsFromUrlParamsPropsType): {
    caseNo: number
    profileName?: string
    isMainColumnBlank: boolean
    isShowModalFrame: boolean
    modalFrameParamName: string
    isButtonBack: boolean
    isButtonClose: boolean
    isLeftColumn: boolean
    redirectPathname?: string
  }
}

/**
 * @description Function to pre-return display params based solely on URL params
 *    This function anwers to the question of pf display params
 *    if we have only URL params and consider lg, xl displays for the service hostnames, not r1.userto.com
 * @import import { getScenarioParamsFromUrlParams } from '../../../Shared/getScenarioParamsFromUrlParams'
 */

export const getScenarioParamsFromUrlParams: GetScenarioParamsFromUrlParamsType =
  ({ urlParam1, urlParam2, urlParam3, query }) => {
    const showType = query && query.s

    let caseNo = 0
    let isLeftColumn = false
    let isMainColumnBlank = false
    let redirectPathname = undefined
    let profileName = undefined
    let isShowModalFrame = false
    let modalFrameParamName = ''
    let isButtonBack = true
    let isButtonClose = true

    if (!urlParam1 && !urlParam2 && !urlParam3) {
      caseNo = 1
      isLeftColumn = true
      isMainColumnBlank = true
      redirectPathname = '/k'
    } else if (urlParam1 && urlParam1 !== 'k' && urlParam1[0] !== '@') {
      caseNo = 2
      isLeftColumn = true
      isMainColumnBlank = true
      redirectPathname = '/k'
    } else if (urlParam1 && urlParam1 === 'k' && !urlParam2) {
      caseNo = 3
      isLeftColumn = true
      isMainColumnBlank = true
      redirectPathname = undefined
    } else if (
      urlParam1 &&
      urlParam1 === 'k' &&
      urlParam2 &&
      urlParam2[0] !== '@'
    ) {
      caseNo = 4
      isLeftColumn = true
      isMainColumnBlank = true
      redirectPathname = '/k'
    } else if (
      urlParam1 &&
      urlParam1 === 'k' &&
      urlParam2 &&
      urlParam2[0] === '@'
    ) {
      caseNo = 5
      profileName = urlParam2
      isLeftColumn = true
      isMainColumnBlank = false
      redirectPathname = undefined

      if (urlParam3) {
        caseNo = 5.5
        isShowModalFrame = true
        modalFrameParamName = urlParam3
      }
    } else if (urlParam1 && urlParam1 !== 'k' && urlParam1[0] === '@') {
      caseNo = 6
      profileName = urlParam1
      isLeftColumn = false
      isMainColumnBlank = false
      redirectPathname = undefined

      if (urlParam2) {
        caseNo = 6.5
        isShowModalFrame = true
        modalFrameParamName = urlParam2
      }

      if (
        urlParam1 &&
        urlParam1 !== 'k' &&
        urlParam1[0] === '@' &&
        showType === 'bc'
      ) {
        caseNo = 6.7
        isShowModalFrame = true
        isButtonBack = false
        isButtonClose = false
      }
    }

    return {
      caseNo,
      profileName,
      isLeftColumn,
      isMainColumnBlank,
      isShowModalFrame,
      modalFrameParamName,
      isButtonBack,
      isButtonClose,
      redirectPathname,
    }
  }
