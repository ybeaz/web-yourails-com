import { ReducerType } from '../../@types/ReducerType'
import { ProfileType } from '../../@types/GraphqlTypes'
import { rootStoreDefault } from '../rootStoreDefault'

export const SET_USERID_DATA_AWS_COGNITO: ReducerType = (store, data) => {
  const { userIdDataAwsCognito } = data
  const { globalVars, profiles } = store
  const {
    globalVars: {
      idUserHost: idUserHostDefault,
      idProfileHost: idProfileHostDefault,
    },
  } = rootStoreDefault

  const idUserHostCurrent = userIdDataAwsCognito.sub || idUserHostDefault

  const profileHost = profiles.find(
    (profile: ProfileType) => profile.userID === idUserHostCurrent
  ) || { userID: idUserHostDefault, profileID: idProfileHostDefault }

  const globalVarsNext = {
    ...globalVars,
    idUserHost: profileHost.userID,
    idProfileHost: profileHost.profileID,
  }

  console.info('SET_USERID_DATA_AWS_COGNITO [23]', {
    'userIdDataAwsCognito.sub': userIdDataAwsCognito.sub,
    idUserHost: profileHost.userID,
    idProfileHost: profileHost.profileID,
    idUserHostDefault,
    idUserHostCurrent,
  })

  return { ...store, userIdDataAwsCognito, globalVars: globalVarsNext }
}
