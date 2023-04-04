import { ActionEventType } from '../../@types/ActionEventType'
export const STOP_PROPAGATION: ActionEventType = (event, data) => {
  event.stopPropagation()
}
