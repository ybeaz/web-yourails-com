import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_PROFILE_HOST: ReducerType = (store, data) => {
  const { idProfile } = data
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, idProfileHost: idProfile }
  return { ...store, globalVars: globalVarsNext }
}
