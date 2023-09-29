import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_PROFILE_SELECT_MENU: ReducerType = (store, data) => {
  const { isProfileSelectMenu } = data
  const { componentsState } = store
  const componentsStateNext = { ...componentsState, isProfileSelectMenu }
  return { ...store, componentsState: componentsStateNext }
}
