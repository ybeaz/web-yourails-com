import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_PROFILE_HOST: ReducerType = (store, data) => {
  const { profileHostID } = data
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, profileHostID }
  return { ...store, globalVars: globalVarsNext }
}
