import { ReducerType } from '../../@types/ReducerType'

export const TOGGLE_IS_USER_MENU: ReducerType = (store, data) => {
  const { isUserMenu } = data

  const { componentsState } = store
  const componentsStateNext = { ...componentsState, isUserMenu }
  return { ...store, componentsState: componentsStateNext }
}
