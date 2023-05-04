type GetScenarioParamsFromUrlParamsPropsType = {
  urlParam1?: string
  urlParam2?: string
  urlParam3?: string
  query?: any
}

interface GetScenarioParamsFromUrlParamsType {
  (props: GetScenarioParamsFromUrlParamsPropsType): {
    caseNo: number
    caseConditions: string
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
    let caseConditions = ''
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
      caseConditions = '!urlParam1 && !urlParam2 && !urlParam3'
      isLeftColumn = true
      isMainColumnBlank = true
      redirectPathname = 'k'
    } else if (urlParam1 && urlParam1 !== 'k' && urlParam1[0] !== '@') {
      caseNo = 2
      caseConditions = "urlParam1 && urlParam1 !== 'k' && urlParam1[0] !== '@'"
      isLeftColumn = true
      isMainColumnBlank = true
      redirectPathname = '/k'
    } else if (urlParam1 && urlParam1 === 'k' && !urlParam2) {
      caseNo = 3
      caseConditions = "urlParam1 && urlParam1 === 'k' && !urlParam2"
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
      caseConditions =
        "urlParam1 && urlParam1 === 'k' && urlParam2 && urlParam2[0] !== '@'"
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
      caseConditions =
        "urlParam1 && urlParam1 === 'k' && urlParam2 && urlParam2[0] === '@'"
      profileName = urlParam2
      isLeftColumn = true
      isMainColumnBlank = false
      redirectPathname = undefined

      if (urlParam3) {
        caseNo = 5.5
        caseConditions = `${caseConditions} && urlParam3`
        isShowModalFrame = true
        modalFrameParamName = urlParam3
      }
    } else if (urlParam1 && urlParam1 !== 'k' && urlParam1[0] === '@') {
      caseNo = 6
      caseConditions = "urlParam1 && urlParam1 !== 'k' && urlParam1[0] === '@'"
      profileName = urlParam1
      isLeftColumn = false
      isMainColumnBlank = false
      redirectPathname = undefined

      if (urlParam2) {
        caseNo = 6.5
        caseConditions = `${caseConditions} && urlParam2`
        isShowModalFrame = true
        modalFrameParamName = urlParam2
      }

      if (showType === 'bc') {
        caseNo = 6.7
        caseConditions = `${caseConditions} && showType === 'bc'`
        isShowModalFrame = true
        isButtonBack = false
        isButtonClose = false
      }
    }

    return {
      caseNo,
      caseConditions,
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
