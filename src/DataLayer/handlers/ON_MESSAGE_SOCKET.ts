import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ON_MESSAGE_SOCKET: ActionEventType = (event, data) => {
  // console.info('ON_MESSAGE_SOCKET [8]', { data })
  dispatch(actionSync.ON_MESSAGE_SOCKET(data))
}
