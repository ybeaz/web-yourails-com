import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_PROFILE_ACTIVE: ReducerType = (store, data) => {
  const { globalVars } = store
  const { profileActiveID } = data
  const globalVarsNext = { ...globalVars, profileActiveID }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
