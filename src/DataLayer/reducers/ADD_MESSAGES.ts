import { ReducerType } from '../../@types/ReducerType'

export const ADD_MESSAGES: ReducerType = (store, data) => {
  const storeNext = { ...store, messages: data.messages }
  return storeNext
}
