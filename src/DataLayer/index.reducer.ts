import { RootStoreType } from '../@types/RootStoreType'
import { ActionType } from '../@types/ActionType'

import { TEMPLATE } from './reducers/TEMPLATE'
import { ON_MESSAGE_SOCKET } from './reducers/ON_MESSAGE_SOCKET'
import { ADD_MESSAGES } from './reducers/ADD_MESSAGES'
import { ADD_PROJECTS } from './reducers/ADD_PROJECTS'
import { ADD_COMPETENCY_TAGS } from './reducers/ADD_COMPETENCY_TAGS'
import { ADD_SECTIONS_MAPPING } from './reducers/ADD_SECTIONS_MAPPING'
import { SET_INPUT_SEARCH } from './reducers/SET_INPUT_SEARCH'
import { SET_INPUT_CHAT } from './reducers/SET_INPUT_CHAT'
import { SET_ID_PROFILE_ACTIVE } from './reducers/SET_ID_PROFILE_ACTIVE'
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
    ON_MESSAGE_SOCKET,
    ADD_MESSAGES,
    ADD_PROJECTS,
    ADD_COMPETENCY_TAGS,
    ADD_SECTIONS_MAPPING,
    SET_INPUT_SEARCH,
    SET_INPUT_CHAT,
    SET_ID_PROFILE_ACTIVE,
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
