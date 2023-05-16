import { TEMPLATE } from './handlers/TEMPLATE'
import { ADD_CONVERSATIONS } from './handlers/ADD_CONVERSATIONS'
import { ADD_MESSAGES } from './handlers/ADD_MESSAGES'
import { ADD_PROJECTS } from './handlers/ADD_PROJECTS'
import { ADD_COMPETENCY_TAGS } from './handlers/ADD_COMPETENCY_TAGS'
import { ADD_SECTIONS_MAPPING } from './handlers/ADD_SECTIONS_MAPPING'
import { ON_CHANGE_INPUT_SEARCH } from './handlers/ON_CHANGE_INPUT_SEARCH'
import { ON_CHANGE_INPUT_CHAT } from './handlers/ON_CHANGE_INPUT_CHAT'
import { SET_STORE_SCENARIO } from './handlers/SET_STORE_SCENARIO'
import { ADD_PROFILES } from './handlers/ADD_PROFILES'
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
  ADD_MESSAGES,
  ADD_CONVERSATIONS,
  ADD_PROJECTS,
  ADD_COMPETENCY_TAGS,
  ADD_SECTIONS_MAPPING,
  ON_CHANGE_INPUT_SEARCH,
  ON_CHANGE_INPUT_CHAT,
  SET_STORE_SCENARIO,
  ADD_PROFILES,
  CLICK_ON_USER_CHAT_CARD,
  CLICK_TOGGLE_SIDEBAR_MAIN,
  DEV_STAGE,
  SET_MODAL_FRAME,
  STOP_PROPAGATION,
}
