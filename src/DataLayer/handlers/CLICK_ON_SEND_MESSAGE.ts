import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_ON_SEND_MESSAGE: ActionEventType = (event, data) => {
  console.info('CLICK_ON_SEND_MESSAGE [9]', { data })

  // dispatch(
  //   actionAsync.CLICK_ON_SEND_MESSAGE_ASYNC.REQUEST({
  //     id: data.id,
  //   })
  // )
}
