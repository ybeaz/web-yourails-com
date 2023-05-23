interface GetItDelayedByType {
  (ms: number): Promise<void>
}

/**
 * Delays execution by the specified time.
 *
 * @description
 * The `getItDelayedBy` function accepts a delay time in milliseconds and returns a promise
 * that resolves after the specified delay time has passed. It internally uses the `setTimeout`
 * function to implement the delay.
 *
 * This function can be used in scenarios where you need to introduce a delay in your code,
 * such as simulating asynchronous behavior, introducing wait times, or controlling the timing
 * of operations.
 *
 * @import import { getItDelayedBy } from './Shared/getItDelayedBy'
 */
export const getItDelayedBy: GetItDelayedByType = ms =>
  new Promise(resolve => setTimeout(resolve, ms))
