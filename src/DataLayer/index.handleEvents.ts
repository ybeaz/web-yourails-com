import { TEMPLATE } from './handlers/TEMPLATE'
import { CLICK_ON_HOST_PROFILE_SELECT } from './handlers/CLICK_ON_HOST_PROFILE_SELECT'
import { CLICK_ON_USER_OPTION_SELECT } from './handlers/CLICK_ON_USER_OPTION_SELECT'
import { CLICK_ON_MENU_CONTROL } from './handlers/CLICK_ON_MENU_CONTROL'
import { ON_MESSAGE_SOCKET } from './handlers/ON_MESSAGE_SOCKET'
import { CLICK_ON_SEND_MESSAGE } from './handlers/CLICK_ON_SEND_MESSAGE'
import { INIT_LOADING } from './handlers/INIT_LOADING'
import { ADD_MESSAGES } from './handlers/ADD_MESSAGES'
import { ADD_PROJECTS } from './handlers/ADD_PROJECTS'
import { ADD_COMPETENCY_TAGS } from './handlers/ADD_COMPETENCY_TAGS'
import { ON_CHANGE_INPUT_SEARCH } from './handlers/ON_CHANGE_INPUT_SEARCH'
import { ON_CHANGE_INPUT_CHAT } from './handlers/ON_CHANGE_INPUT_CHAT'
import { SET_STORE_SCENARIO } from './handlers/SET_STORE_SCENARIO'
import { CLICK_ON_USER_CHAT_CARD } from './handlers/CLICK_ON_USER_CHAT_CARD'
import { CLICK_TOGGLE_SIDEBAR_MAIN } from './handlers/CLICK_TOGGLE_SIDEBAR_MAIN'
import { DEV_STAGE } from './handlers/DEV_STAGE'
import { SET_MODAL_FRAME } from './handlers/SET_MODAL_FRAME'
import { STOP_PROPAGATION } from './handlers/STOP_PROPAGATION'

export type HandleEventsType = Record<string, (arg1: any, arg2: any) => any>

/**
 * @import import { handleEvents, HandleEventsType } from '../DataLayer/index.handleEvents'
 */

export const handleEvents: HandleEventsType = {
  TEMPLATE,
  CLICK_ON_HOST_PROFILE_SELECT,
  CLICK_ON_USER_OPTION_SELECT,
  CLICK_ON_MENU_CONTROL,
  ON_MESSAGE_SOCKET,
  CLICK_ON_SEND_MESSAGE,
  INIT_LOADING,
  ADD_MESSAGES,
  ADD_PROJECTS,
  ADD_COMPETENCY_TAGS,
  ON_CHANGE_INPUT_SEARCH,
  ON_CHANGE_INPUT_CHAT,
  SET_STORE_SCENARIO,
  CLICK_ON_USER_CHAT_CARD,
  CLICK_TOGGLE_SIDEBAR_MAIN,
  DEV_STAGE,
  SET_MODAL_FRAME,
  STOP_PROPAGATION,
}
