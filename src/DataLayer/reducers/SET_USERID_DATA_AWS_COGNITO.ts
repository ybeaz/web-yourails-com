import { ReducerType } from '../../@types/ReducerType'

export const SET_USERID_DATA_AWS_COGNITO: ReducerType = (store, data) => {
  const { userIdDataAwsCognito } = data
  console.info('SET_USERID_DATA_AWS_COGNITO [4]', {
    data,
    userIdDataAwsCognito,
  })

  return { ...store, userIdDataAwsCognito }
}
