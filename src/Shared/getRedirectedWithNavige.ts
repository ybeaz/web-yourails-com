import { router } from '../RouterScreensConfig'

interface GetRedirectedWithNavigeType {
  (pathnameNext: string | undefined, options: { replace: boolean }): void
}

/**
 * @description Function to
 * @import import { getRedirectedWithNavige } from '../../../Shared/getRedirectedWithNavige'
 */

export const getRedirectedWithNavige: GetRedirectedWithNavigeType = (
  pathnameNext,
  { replace = true }
) => {
  try {
    if (pathnameNext) router.navigate(pathnameNext, { replace })
  } catch (error: any) {
    const message = error.message
    console.info('getRedirectedWithNavige [21]', {
      message,
      pathnameNext,
      replace,
    })
  }
}
