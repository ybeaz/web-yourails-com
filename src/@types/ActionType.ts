import { Action } from 'redux'

/**
 * @import import { ActionType } from '../@types/ActionType'
 */
export type ActionType = Action & {
  typeEvent?: string
  data?: any
}
