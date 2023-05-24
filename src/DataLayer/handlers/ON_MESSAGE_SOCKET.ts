import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

// const { dispatch, getState } = store

export const ON_MESSAGE_SOCKET: ActionEventType = (event, data) => {
  // console.info('ON_MESSAGE_SOCKET [8]', { data })
  // dispatch(
  //   actionSync.ON_MESSAGE_SOCKET({
  //     id: data.id,
  //   })
  // )
}
