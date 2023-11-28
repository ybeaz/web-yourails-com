import { ReducerType } from '../../@types/ReducerType'

export const SET_ID_USER_HOST: ReducerType = (store, data) => {
  const { globalVars } = store
  const { userHostID } = data
  const globalVarsNext = { ...globalVars, userHostID }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
