import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_SIDEBAR_RIGHT: ReducerType = (store, data) => {
  const { componentsState } = store
  const componentsStateNext = { ...componentsState, isLeftColumn: data }
  const storeNext = { ...store, componentsState: componentsStateNext }
  return storeNext
}
