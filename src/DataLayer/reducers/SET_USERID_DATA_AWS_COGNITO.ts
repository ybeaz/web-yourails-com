import { ReducerType } from '../../@types/ReducerType'
import { ProfileType } from '../../@types/GraphqlTypes'
import { rootStoreDefault } from '../rootStoreDefault'

export const SET_USERID_DATA_AWS_COGNITO: ReducerType = (store, data) => {
  const { userIdDataAwsCognito } = data
  const { globalVars, profiles } = store
  const {
    globalVars: {
      userHostID: idUserHostDefault,
      profileHostID: idProfileHostDefault,
    },
  } = rootStoreDefault

  const idUserHostCurrent = userIdDataAwsCognito.sub || idUserHostDefault

  const profileHost = profiles.find(
    (profile: ProfileType) => profile.userID === idUserHostCurrent
  ) || { userID: idUserHostDefault, profileID: idProfileHostDefault }

  const globalVarsNext = {
    ...globalVars,
    userHostID: profileHost.userID,
    profileHostID: profileHost.profileID,
  }

  return { ...store, userIdDataAwsCognito, globalVars: globalVarsNext }
}
