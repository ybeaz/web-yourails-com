import { RootStoreType } from './RootStoreType'

/**
 * @import import { ReducerType } from '../@types/ReducerType'
 */
export interface ReducerType {
  (store: RootStoreType, data: any): RootStoreType
}
