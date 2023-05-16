import { ReducerType } from '../../@types/ReducerType'

export const ADD_SECTIONS_MAPPING: ReducerType = (store, data) => {
  const storeNext = { ...store, sectionsMapping: data.sectionsMapping }
  return storeNext
}
