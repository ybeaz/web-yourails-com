import { ReducerType } from '../../@types/ReducerType'

export const ADD_COMPETENCY_TAGS: ReducerType = (store, data) => {
  const storeNext = { ...store, competencyTags: data.competencyTags }
  return storeNext
}
