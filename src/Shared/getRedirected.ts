import { Platform } from 'react-native'
import { historyWeb } from '../Navigation/historyWeb'

interface GetRedirectedType {
  (pathnameNext: string | undefined, options: { replace: boolean }): void
}

/**
 * @description Function to
 * @import import { getRedirected } from '../../../Shared/getRedirected'
 */

export const getRedirected: GetRedirectedType = async (
  pathnameNext,
  { replace = true }
) => {
  // TODO Implement redirect for ios and android
  if (
    Platform.OS === 'web' ||
    Platform.OS === 'windows' ||
    Platform.OS === 'macos'
  ) {
    if (!pathnameNext) return
    try {
      historyWeb.push(pathnameNext)
    } catch (error: any) {
      const message = error.message
      console.info('getRedirected [21]', {
        message,
        pathnameNext,
        replace,
      })
      window.location.pathname = pathnameNext
    }
  }
}
