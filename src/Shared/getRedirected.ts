import { historyWeb } from '../Navigation/historyWeb'
import { PlatformOSYrlType } from '../YrlNativeViewLibrary'

interface GetRedirectedType {
  (
    pathnameNext: string | undefined,
    options: {
      platformOS?: PlatformOSYrlType
      replace: boolean
    }
  ): void
}

/**
 * @description Function to
 * @import import { getRedirected } from '../../../Shared/getRedirected'
 */

export const getRedirected: GetRedirectedType = (
  pathnameNext,
  { platformOS = 'web', replace = true }
) => {
  // TODO Implement redirect for ios and android

  if (platformOS === 'web') {
    if (!pathnameNext) return
    try {
      historyWeb.push(pathnameNext)
    } catch (error: any) {
      const message = error.message
      console.log('getRedirected [21]', {
        message,
        pathnameNext,
        replace,
      })
      window.location.pathname = pathnameNext
    }
  }
}
