export enum OperatorType {
  '===' = '===',
  '!==' = '!==',
}

type ObjIdUserArrayType = Record<string, any>

interface GetFilteredObjsArrayByIdUserType {
  (
    objsArr: ObjIdUserArrayType[],
    propName: string,
    value: string | number | undefined,
    operator?: OperatorType
  ): ObjIdUserArrayType[]
}

/**
 * @description Function to
 * @import import {getFilteredObjsArrayBy, OperatorType } from '../../../Shared/getFilteredObjsArrayBy'
 */
export const getFilteredObjsArrayBy: GetFilteredObjsArrayByIdUserType = (
  objsArr,
  propName,
  value,
  operator = OperatorType['===']
): ObjIdUserArrayType[] => {
  if (operator === OperatorType['===']) {
    return objsArr.filter((obj: ObjIdUserArrayType) => obj[propName] === value)
  } else if (operator === OperatorType['!==']) {
    return objsArr.filter((obj: ObjIdUserArrayType) => obj[propName] !== value)
  }
  return objsArr
}
