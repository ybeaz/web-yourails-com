interface GetRedirectedPathnameType {
  (router: any, redirectPathname: string | undefined): void
}

/**
 * @description Function to
 * @import import { getRedirectedPathnameHash } from '../../../Shared/getRedirectedPathnameHash'
 */

export const getRedirectedPathname: GetRedirectedPathnameType = (
  router,
  redirectPathname
) => {
  if (!redirectPathname) return

  router.navigate(redirectPathname)
}
