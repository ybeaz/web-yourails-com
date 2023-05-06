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
 * @import import {getFilteredObjsArrayByIdUser, OperatorType } from '../../../Shared/getFilteredObjsArrayByIdUser'
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
