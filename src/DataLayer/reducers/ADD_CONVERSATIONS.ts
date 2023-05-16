import { ReducerType } from '../../@types/ReducerType'

export const ADD_CONVERSATIONS: ReducerType = (store, data) => {
  const storeNext = { ...store, conversations: data.conversations }
  return storeNext
}
