import { Reducer, Action, ReducersMapObject } from 'redux'

import { RootStoreType } from '../@types/RootStoreType'
import { ReducerType } from '../@types/ReducerType'

import { TEMPLATE } from './reducers/TEMPLATE'
import { ADD_NAVIGATION_MOBILE } from './reducers/ADD_NAVIGATION_MOBILE'
import { SET_USERID_DATA_AWS_COGNITO } from './reducers/SET_USERID_DATA_AWS_COGNITO'
import { REMOVE_LAST_MESSAGE_ID_PROFILE } from './reducers/REMOVE_LAST_MESSAGE_ID_PROFILE'
import { SET_ID_PROFILE_HOST } from './reducers/SET_ID_PROFILE_HOST'
import { TOGGLE_PROFILE_SELECT_MENU } from './reducers/TOGGLE_PROFILE_SELECT_MENU'
import { TOGGLE_IS_USER_MENU } from './reducers/TOGGLE_IS_USER_MENU'
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

export type IndexReducerType =
  | Reducer<RootStoreType, Action<any>>
  | ReducersMapObject<RootStoreType, Action<any>>
// export interface IndexReducerType {
//   (store: RootStoreType, action: ActionType): RootStoreType
// }

export const indexReducer: IndexReducerType = (
  store = rootStoreDefault,
  action = { type: 'DEFAULT' }
) => {
  // @ts-ignore
  const { type, data } = action

  const output: Record<string, ReducerType> = {
    TEMPLATE,
    ADD_NAVIGATION_MOBILE,
    SET_USERID_DATA_AWS_COGNITO,
    REMOVE_LAST_MESSAGE_ID_PROFILE,
    SET_ID_PROFILE_HOST,
    TOGGLE_PROFILE_SELECT_MENU,
    TOGGLE_IS_USER_MENU,
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

  return output[type] ? output[type](store, data) : store
}
