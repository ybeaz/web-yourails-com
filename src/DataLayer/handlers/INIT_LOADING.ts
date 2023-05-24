import { store } from '../store'

import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

let counter = 0

export const INIT_LOADING: ActionEventType = async (event, data) => {
  if (counter > 0) return
  counter += 1

  await dispatch(actionAsync.INIT_LOADING_ASYNC.REQUEST({}))
}
