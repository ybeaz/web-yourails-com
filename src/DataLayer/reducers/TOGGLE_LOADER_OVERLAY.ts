import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_LOADER_OVERLAY: ReducerType = (store, data) => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isLoaderOverlayVisible: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
