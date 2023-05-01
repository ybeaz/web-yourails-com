interface GetProfileUrlFromParamsType {
  (urlParam1: string | undefined, urlParam2: string | undefined):
    | string
    | undefined
}

/**
 * @description Function to return
 * @import import { getProfileUrlFromParams } from '../../../Shared/getProfileUrlFromParams'
 */

export const getProfileUrlFromParams: GetProfileUrlFromParamsType = (
  urlParam1,
  urlParam2
) => {
  let profileName: string | undefined = undefined
  if (urlParam2 && urlParam2[0] === '@') profileName = urlParam2
  else if (urlParam1 && urlParam1[0] === '@') profileName = urlParam1
  return profileName
}
