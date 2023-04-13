import { ReducerType } from '../../@types/ReducerType'

export const ADD_PROFILES: ReducerType = (store, data) => {
  const storeNext = { ...store, profiles: data.profiles }
  return storeNext
}
