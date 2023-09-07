import { ReducerType } from '../../@types/ReducerType'
import { ProfileType } from '../../@types/GraphqlTypes'

export const SET_USERID_DATA_AWS_COGNITO: ReducerType = (store, data) => {
  const { userIdDataAwsCognito } = data
  const { globalVars, profiles } = store

  const profileHost = profiles.find(
    (profile: ProfileType) => profile.idUser === userIdDataAwsCognito.sub
  ) || { idUser: undefined, idProfile: undefined }

  const globalVarsNext = {
    ...globalVars,
    idUserHost: '4', // profileHost.idUser,
    idProfileHost: '4', // profileHost.idProfile,
  }

  return { ...store, userIdDataAwsCognito, globalVars: globalVarsNext }
}
