interface GetRedirectedPathnameHashType {
  (router: any, redirectPathname: string | undefined): void
}

/**
 * @description Function to
 * @import import { getRedirectedPathnameHash } from '../../../Shared/getRedirectedPathnameHash'
 */

export const getRedirectedPathnameHash: GetRedirectedPathnameHashType = (
  router,
  redirectPathname
) => {
  if (!redirectPathname) return

  router.navigate(redirectPathname)
}
