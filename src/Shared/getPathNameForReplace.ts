type GetPathNameForReplacePropsType = {
  urlParam1: string
  urlParam2: string
  query?: { s: string }
  search?: string
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
  search,
  profileName,
  tabName,
}) => {
  let pathnameNext = ''
  let addOnTab = ''

  if (tabName) addOnTab = `/${tabName}`

  let addOnQuery = ''
  if (query?.s && query?.s) addOnQuery = `?s=${query.s}`
  else if (search) addOnQuery = search
  else addOnQuery = ''

  let caseNo = ''

  if (urlParam1 === 'k' && !urlParam2) {
    caseNo = '1'
    if (profileName) {
      caseNo = '1.2'
      pathnameNext = `/${urlParam1}/${profileName}`
    }
  } else if (urlParam1 === 'k' && urlParam2[0] === '@') {
    caseNo = '2'
    pathnameNext = `/${urlParam1}/${urlParam2}`
    if (profileName) {
      caseNo = '2.2'
      pathnameNext = `/${urlParam1}/${profileName}`
    }
  } else if (urlParam1 === 'k' && urlParam2 === '/') {
    caseNo = '3'
    pathnameNext = `/${urlParam1}`
  } else if (urlParam1 && urlParam1[0] === '@') {
    caseNo = '4'
    pathnameNext = `/${urlParam1}`
    if (profileName) {
      caseNo = '4.2'
      pathnameNext = `/${profileName}`
    }
  }

  pathnameNext = `${pathnameNext}${addOnTab}${addOnQuery}`

  return pathnameNext
}
