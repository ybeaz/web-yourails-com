type GetPathNameForReplacePropsType = {
  urlParam1: string
  urlParam2: string
  query?: { s?: string }
  profileName?: string
  tabName?: string
}

interface GetPathNameForReplaceType {
  (props: GetPathNameForReplacePropsType): string
}

/**
 * @description Function to obtain a new pathname
 * @import import { getPathNameForReplace } from '../../../Shared/getPathNameForReplace'
 */

export const getPathNameForReplace: GetPathNameForReplaceType = ({
  urlParam1,
  urlParam2,
  query,
  profileName,
  tabName,
}) => {
  let pathnameNext = ''
  let addOnTab = ''
  if (tabName) addOnTab = `/${tabName}`

  let addOnQuery = ''
  if (query?.s) addOnQuery = `?s=${query.s}`

  if (urlParam1 === 'k' && urlParam2 && urlParam2[0] === '@') {
    pathnameNext = `/${urlParam1}/${urlParam2}`
    if (profileName) pathnameNext = `/${urlParam1}/${profileName}`
  } else if (urlParam1 && urlParam1[0] === '@' && !urlParam2) {
    pathnameNext = `/${urlParam1}`
    if (profileName) pathnameNext = `/${profileName}`
  } else if (urlParam1 && urlParam1[0] !== '@') {
    pathnameNext = `/${urlParam1}`
    if (profileName) pathnameNext = `/${urlParam1}/${profileName}`
  }

  pathnameNext = `${pathnameNext}${addOnTab}${addOnQuery}`

  return pathnameNext
}
