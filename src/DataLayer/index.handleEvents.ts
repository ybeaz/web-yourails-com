import { IHandleEventsInterface } from '../Interfaces/IHandleEventsInterface'
import { ActionEventType } from '../@types/ActionEventType'

import { TEMPLATE } from './handlers/TEMPLATE'
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
  SET_STORE_SCENARIO,
  ADD_PROFILES,
  CLICK_ON_USER_CHAT_CARD,
  CLICK_TOGGLE_SIDEBAR_MAIN,
  DEV_STAGE,
  SET_MODAL_FRAME,
  STOP_PROPAGATION,
}
