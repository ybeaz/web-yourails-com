import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_LEFT_COLUMN: ReducerType = (store, data) => {
  const { componentsState } = store
  const componentsStateNext = { ...componentsState, isLeftColumn: data }
  const storeNext = { ...store, componentsState: componentsStateNext }
  return storeNext
}
