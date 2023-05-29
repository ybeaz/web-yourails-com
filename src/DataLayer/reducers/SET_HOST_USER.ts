import { ReducerType } from '../../@types/ReducerType'

export const SET_HOST_USER: ReducerType = (store, data) => {
  const { idUser } = data
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, idUserHost: idUser }
  return { ...store, globalVars: globalVarsNext }
}
