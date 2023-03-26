import { ActionType } from '../@types/ActionType'

export interface CreateSyncAction {
  [key: string]: Function
}

/**
 * @description Function to create syncronous actions
 * @param actions
 * @returns
 */
export const createSyncActions: Function = (
  actions: string[]
): CreateSyncAction => {
  return actions.reduce((actionsSync, currentAction) => {
    const currentActionNext = {
      [currentAction]: (data: any): ActionType => ({
        type: currentAction,
        data,
      }),
    }
    return { ...actionsSync, ...currentActionNext }
  }, {})
}
