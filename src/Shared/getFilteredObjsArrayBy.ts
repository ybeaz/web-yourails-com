import { IdUserType } from '../@types/UserType'

type ObjIdUserArrayType = {
  idUser: IdUserType
  [key: string]: any
}

interface GetFilteredObjsArrayByIdUserType {
  (
    objsArr: ObjIdUserArrayType[],
    propName: string,
    value: string | number | undefined
  ): ObjIdUserArrayType[]
}

/**
 * @description Function to
 * @import import {getFilteredObjsArrayByIdUser } from '../../../Shared/getFilteredObjsArrayByIdUser'
 */
export const getFilteredObjsArrayBy: GetFilteredObjsArrayByIdUserType = (
  objsArr,
  propName,
  value
): ObjIdUserArrayType[] => {
  return objsArr.filter((obj: ObjIdUserArrayType) => obj[propName] === value)
}
