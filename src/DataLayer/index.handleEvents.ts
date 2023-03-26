import { IHandleEventsInterface } from '../Interfaces/IHandleEventsInterface'
import { ActionEventType } from '../@types/ActionEventType'

import { TEMPLATE } from './handlers/TEMPLATE'
import { DEV_STAGE } from './handlers/DEV_STAGE'
import { SET_MODAL_FRAMES } from './handlers/SET_MODAL_FRAMES'
import { STOP_PROPAGATION } from './handlers/STOP_PROPAGATION'

export const handleEvents: IHandleEventsInterface = (event, props): void => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent

  const output: Record<string, ActionEventType> = {
    TEMPLATE,
    DEV_STAGE,
    SET_MODAL_FRAMES,
    STOP_PROPAGATION,
  }

  // @ts-ignore
  output[type] && output[type](event, data)
}
