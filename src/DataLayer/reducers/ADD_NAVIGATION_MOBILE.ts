import { ReducerType } from '../../@types/ReducerType'

export const ADD_NAVIGATION_MOBILE: ReducerType = (store, data) => {
  const { navigation } = data
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, navigation }

  return { ...store, globalVars: globalVarsNext }
}
