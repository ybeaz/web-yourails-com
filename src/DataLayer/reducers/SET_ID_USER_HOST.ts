import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_USER_HOST: ReducerType = (store, data) => {
  const { globalVars } = store
  const { idUserHost } = data
  const globalVarsNext = { ...globalVars, idUserHost }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
