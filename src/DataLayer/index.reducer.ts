import { RootStoreType } from '../@types/RootStoreType'
import { ActionType } from '../@types/ActionType'

import { TEMPLATE } from './reducers/TEMPLATE'
import { TOGGLE_IS_SHOW_GLOBAL } from './reducers/TOGGLE_IS_SHOW_GLOBAL'
import { ADD_PROFILES } from './reducers/ADD_PROFILES'
import { SET_ID_USER_HOST } from './reducers/SET_ID_USER_HOST'
import { TOGGLE_MAIN_COLUMN } from './reducers/TOGGLE_MAIN_COLUMN'
import { TOGGLE_SIDEBAR_RIGHT } from './reducers/TOGGLE_SIDEBAR_RIGHT'
import { SET_MODAL_FRAME } from './reducers/SET_MODAL_FRAME'
import { TOGGLE_LOADER_OVERLAY } from './reducers/TOGGLE_LOADER_OVERLAY'

import { rootStoreDefault } from './rootStoreDefault'

export interface IIndexReducer {
  (store: RootStoreType, action: ActionType): RootStoreType
}

export const indexReducer: IIndexReducer = (
  store = rootStoreDefault,
  action = { type: 'DEFAULT' }
) => {
  const { type, data } = action

  const output = {
    TEMPLATE,
    TOGGLE_IS_SHOW_GLOBAL,
    ADD_PROFILES,
    SET_ID_USER_HOST,
    TOGGLE_MAIN_COLUMN,
    TOGGLE_SIDEBAR_RIGHT,
    SET_MODAL_FRAME,
    TOGGLE_LOADER_OVERLAY,
  }

  // @ts-ignore
  return output[type] ? output[type](store, data) : store
}
