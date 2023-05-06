import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_PROFILE_ACTIVE: ReducerType = (store, data) => {
  const { globalVars } = store
  const { idProfileActive } = data
  const globalVarsNext = { ...globalVars, idProfileActive }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
