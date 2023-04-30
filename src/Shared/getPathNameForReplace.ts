interface GetPathNameForReplaceType {
  (tabName: string): string
}

/**
 * @description Function to obtain a new pathname
 * @import import { getPathNameForReplace } from '../../../Shared/getPathNameForReplace'
 */

export const getPathNameForReplace: GetPathNameForReplaceType = tabName => {
  const [urlParam0, urlParam1, urlParam2, urlParam3] =
    window.location.pathname.split('/')

  let pathnameNext = ''
  let addOn = ''
  if (tabName) addOn = `/${tabName}`

  if (urlParam2 && urlParam2[0] === '@')
    pathnameNext = `/${urlParam1}/${urlParam2}${addOn}`
  else if (!urlParam2 && urlParam1 && urlParam1[0] === '@')
    pathnameNext = `/${urlParam1}${addOn}`
  else if (!urlParam2 && urlParam1 && urlParam1[0] !== '@')
    pathnameNext = `/${urlParam1}`

  return pathnameNext
}
