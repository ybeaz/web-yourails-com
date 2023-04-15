import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_IS_SHOW_GLOBAL: ReducerType = (store, data) => {
  const { globalVars } = store
  const { isShowApp } = data
  const globalVarsNext = { ...globalVars, isShowApp }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
