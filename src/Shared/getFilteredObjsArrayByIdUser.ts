type ObjIdUserArrayType = {
  idUser: string | number
  [key: string]: any
}

interface GetFilteredObjsArrayByIdUserType {
  (objsArr: ObjIdUserArrayType[], idUser: string | number): ObjIdUserArrayType[]
}

/**
 * @description Function to
 * @import import {getFilteredObjsArrayByIdUser } from '../../../Shared/getFilteredObjsArrayByIdUser'
 */
export const getFilteredObjsArrayByIdUser: GetFilteredObjsArrayByIdUserType = (
  objsArr,
  idUser
): ObjIdUserArrayType[] => {
  return objsArr.filter((obj: ObjIdUserArrayType) => obj.idUser === idUser)
}
