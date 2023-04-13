import { createSyncActions, CreateSyncAction } from './createActionsSync'
import { createAsyncAction, CreateAsyncAction } from './createActionsAsync'
import { ActionType } from '../@types/ActionType'

/** @description  Synchroneours redux actions */
const ACTIONS_SYNC: string[] = [
  'ADD_PROFILES',
  'SET_ID_USER_HOST',
  'TOGGLE_MAIN_COLUMN',
  'TOGGLE_SIDEBAR_RIGHT',
  'SET_MODAL_FRAME',
  'TOGGLE_LOADER_OVERLAY', // TODO
  'SET_THEME', // TODO
  'TEMPLATE',
]

/** @description Asynchroneous actions for saga */
const ACTION_ASYNC: string[] = ['TEMPLATE_ASYNC']

export const actionSync: CreateSyncAction = createSyncActions(ACTIONS_SYNC)
export const actionAsync: CreateAsyncAction = createAsyncAction(ACTION_ASYNC)

// Example of the sync action
// export const TEST_ACTION: Function = (data: any = true): ActionType => ({
//   type: 'TEST_ACTION',
//   data,
// })
