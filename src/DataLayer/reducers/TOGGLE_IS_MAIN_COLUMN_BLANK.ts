import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_IS_MAIN_COLUMN_BLANK: ReducerType = (store, data) => {
  const { componentsState } = store
  const componentsStateNext = { ...componentsState, isMainColumnBlank: data }
  const storeNext = { ...store, componentsState: componentsStateNext }
  return storeNext
}
