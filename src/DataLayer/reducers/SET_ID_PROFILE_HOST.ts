import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_PROFILE_HOST: ReducerType = (store, data) => {
  const { idProfileHost } = data
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, idProfileHost }
  return { ...store, globalVars: globalVarsNext }
}
