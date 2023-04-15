import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_USER_HOST: ReducerType = (store, data) => {
  const { globalVars } = store
  const { idUser } = data
  const globalVarsNext = { ...globalVars, idUserHost: idUser }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
