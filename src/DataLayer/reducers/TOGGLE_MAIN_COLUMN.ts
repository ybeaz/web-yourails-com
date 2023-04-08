import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_MAIN_COLUMN: ReducerType = (store, data) => {
  const { componentsState } = store
  const componentsStateNext = { ...componentsState, isMainColumn: data }
  const storeNext = { ...store, componentsState: componentsStateNext }
  return storeNext
}
