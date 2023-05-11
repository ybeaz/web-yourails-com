import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ON_CHANGE_INPUT: ActionEventType = (event, data) => {
  console.info('ON_CHANGE_INPUT [9]', { data })
  // dispatch(
  //   actionSync.ON_CHANGE_INPUT({
  //     id: data.id,
  //   })
  // )
}
