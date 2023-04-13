import { IHandleEventsInterface } from '../Interfaces/IHandleEventsInterface'
import { ActionEventType } from '../@types/ActionEventType'

import { TEMPLATE } from './handlers/TEMPLATE'
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
  SET_SIDEBAR_MAIN_LAYOUT,
  CLICK_TOGGLE_SIDEBAR_MAIN,
  DEV_STAGE,
  SET_MODAL_FRAME,
  STOP_PROPAGATION,
}
