interface GetDelayedByType {
  (ms: number): Promise<void>
}

/**
 * @description Function to
 * @import import { getDelayedBy } from '../../../Shared/getDelayedBy'
 */
export const getDelayedBy: GetDelayedByType = ms =>
  new Promise(resolve => setTimeout(resolve, ms))
