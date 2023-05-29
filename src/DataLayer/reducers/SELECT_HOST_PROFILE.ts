import { ReducerType } from '../../@types/ReducerType'

export const SELECT_HOST_PROFILE: ReducerType = (store, data) => {
  const { idProfile } = data
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, idProfileHost: idProfile }
  return { ...store, globalVars: globalVarsNext }
}
