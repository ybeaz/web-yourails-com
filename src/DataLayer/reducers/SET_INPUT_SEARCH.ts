import { ReducerType } from '../../@types/ReducerType'

export const SET_INPUT_SEARCH: ReducerType = (store, data) => {
  const { text } = data
  const { forms } = store
  const formsNext = { ...forms, inputSearch: text }
  return { ...store, forms: formsNext }
}
