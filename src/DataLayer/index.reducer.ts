import { RootStoreType } from '../@types/RootStoreType'
import { ActionType } from '../@types/ActionType'

import { TEMPLATE } from './reducers/TEMPLATE'
import { TOGGLE_IS_SHOW_GLOBAL } from './reducers/TOGGLE_IS_SHOW_GLOBAL'
import { ADD_PROFILES } from './reducers/ADD_PROFILES'
import { SET_ID_USER_HOST } from './reducers/SET_ID_USER_HOST'
import { TOGGLE_IS_MAIN_COLUMN_BLANK } from './reducers/TOGGLE_IS_MAIN_COLUMN_BLANK'
import { TOGGLE_IS_MAIN_COLUMN } from './reducers/TOGGLE_IS_MAIN_COLUMN'
import { TOGGLE_IS_LEFT_COLUMN } from './reducers/TOGGLE_IS_LEFT_COLUMN'
import { SET_MODAL_FRAME } from './reducers/SET_MODAL_FRAME'
import { TOGGLE_LOADER_OVERLAY } from './reducers/TOGGLE_LOADER_OVERLAY'

import { rootStoreDefault } from './rootStoreDefault'

export interface IndexReducerType {
  (store: RootStoreType, action: ActionType): RootStoreType
}

export const indexReducer: IndexReducerType = (
  store = rootStoreDefault,
  action = { type: 'DEFAULT' }
) => {
  const { type, data } = action

  const output = {
    TEMPLATE,
    TOGGLE_IS_SHOW_GLOBAL,
    ADD_PROFILES,
    SET_ID_USER_HOST,
    TOGGLE_IS_MAIN_COLUMN_BLANK,
    TOGGLE_IS_MAIN_COLUMN,
    TOGGLE_IS_LEFT_COLUMN,
    SET_MODAL_FRAME,
    TOGGLE_LOADER_OVERLAY,
  }

  // @ts-ignore
  return output[type] ? output[type](store, data) : store
}
