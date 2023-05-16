import { ReducerType } from '../../@types/ReducerType'

export const ADD_PROJECTS: ReducerType = (store, data) => {
  const storeNext = { ...store, projects: data.projects }
  return storeNext
}
