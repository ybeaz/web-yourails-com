import { IHandleEventsInterface } from '../Interfaces/IHandleEventsInterface'
import { ActionEventType } from '../@types/ActionEventType'

import { TEMPLATE } from './handlers/TEMPLATE'
import { CLICK_BACK_TO_CARDS_BUTTON } from './handlers/CLICK_BACK_TO_CARDS_BUTTON'
import { SET_DEVICE_SCREEN } from './handlers/SET_DEVICE_SCREEN'
import { DEV_STAGE } from './handlers/DEV_STAGE'
import { SET_MODAL_FRAME } from './handlers/SET_MODAL_FRAME'
import { STOP_PROPAGATION } from './handlers/STOP_PROPAGATION'

export const handleEvents: any = {
  TEMPLATE,
  SET_DEVICE_SCREEN,
  CLICK_BACK_TO_CARDS_BUTTON,
  DEV_STAGE,
  SET_MODAL_FRAME,
  STOP_PROPAGATION,
}
