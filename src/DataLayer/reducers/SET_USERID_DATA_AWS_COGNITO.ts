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
    (profile: ProfileType) => profile.idUser === idUserHostCurrent
  ) || { idUser: idUserHostDefault, idProfile: idProfileHostDefault }

  const globalVarsNext = {
    ...globalVars,
    idUserHost: profileHost.idUser,
    idProfileHost: profileHost.idProfile,
  }

  console.info('SET_USERID_DATA_AWS_COGNITO [23]', {
    'userIdDataAwsCognito.sub': userIdDataAwsCognito.sub,
    idUserHost: profileHost.idUser,
    idProfileHost: profileHost.idProfile,
    idUserHostDefault,
    idUserHostCurrent,
  })

  return { ...store, userIdDataAwsCognito, globalVars: globalVarsNext }
}
