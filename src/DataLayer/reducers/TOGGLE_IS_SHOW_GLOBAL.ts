import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_IS_SHOW_GLOBAL: ReducerType = (store, data) => {
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, isShowApp: data }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
