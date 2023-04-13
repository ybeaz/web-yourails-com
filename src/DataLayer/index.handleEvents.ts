import { IHandleEventsInterface } from '../Interfaces/IHandleEventsInterface'
import { ActionEventType } from '../@types/ActionEventType'

import { TEMPLATE } from './handlers/TEMPLATE'
import { SET_ID_USER_HOST_INIT } from './handlers/SET_ID_USER_HOST_INIT'
import { ADD_PROFILES } from './handlers/ADD_PROFILES'
import { CLICK_ON_USER_CHAT_CARD } from './handlers/CLICK_ON_USER_CHAT_CARD'
import { CLICK_TOGGLE_SIDEBAR_MAIN } from './handlers/CLICK_TOGGLE_SIDEBAR_MAIN'
import { SET_SIDEBAR_MAIN_LAYOUT } from './handlers/SET_SIDEBAR_MAIN_LAYOUT'
import { DEV_STAGE } from './handlers/DEV_STAGE'
import { SET_MODAL_FRAME } from './handlers/SET_MODAL_FRAME'
import { STOP_PROPAGATION } from './handlers/STOP_PROPAGATION'

export type HandleEventsType = Record<string, (arg1: any, arg2: any) => any>

/**
 * @import import { handleEvents, HandleEventsType } from '../DataLayer/index.handleEvents'
 */

export const handleEvents: HandleEventsType = {
  TEMPLATE,
  SET_ID_USER_HOST_INIT,
  ADD_PROFILES,
  CLICK_ON_USER_CHAT_CARD,
  SET_SIDEBAR_MAIN_LAYOUT,
  CLICK_TOGGLE_SIDEBAR_MAIN,
  DEV_STAGE,
  SET_MODAL_FRAME,
  STOP_PROPAGATION,
}
