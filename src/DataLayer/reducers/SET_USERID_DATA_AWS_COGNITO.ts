import { ReducerType } from '../../@types/ReducerType'

export const SET_USERID_DATA_AWS_COGNITO: ReducerType = (store, data) => {
  const { userIdDataAwsCognito } = data
  const { globalVars, profiles } = store

  const profileHost = profiles.find(
    (profile: any) => profile.idUser === userIdDataAwsCognito.sub
  ) || { idUser: undefined, idProfile: undefined }

  const globalVarsNext = {
    ...globalVars,
    idUserHost: profileHost.idUser,
    idProfileHost: profileHost.idProfile,
  }

  return { ...store, userIdDataAwsCognito, globalVars: globalVarsNext }
}
