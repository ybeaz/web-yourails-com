interface GetRedirectedPathnameHashType {
  (redirectPathname: string | undefined, redirectHash: string | undefined): void
}

/**
 * @description Function to
 * @import import { getRedirectedPathnameHash } from '../../../Shared/getRedirectedPathnameHash'
 */

export const getRedirectedPathnameHash: GetRedirectedPathnameHashType = (
  redirectPathname,
  redirectHash
) => {
  if ((redirectPathname || redirectPathname === '') && redirectHash)
    window.location.assign(`${redirectPathname}#${redirectHash}`)
  else if (
    (redirectPathname || redirectPathname === '') &&
    (redirectHash || redirectHash === '')
  ) {
    window.location.assign(`${redirectPathname}`)
  } else if ((redirectPathname || redirectPathname === '') && !redirectHash)
    window.location.pathname = redirectPathname
  else if (!redirectPathname && (redirectHash || redirectHash === ''))
    window.location.hash = redirectHash
}
