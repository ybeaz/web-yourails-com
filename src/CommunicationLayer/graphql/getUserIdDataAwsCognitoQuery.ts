import { gql, DocumentNode } from '@apollo/client'
import { print } from 'graphql'

const getUserIdDataAwsCognitoDocument: DocumentNode = gql`
  query GetUserIdDataAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputGraphql!
  ) {
    getUserIdDataAwsCognito(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      refresh_token
      message
    }
  }
`

/**
 * @import import { getUserIdDataAwsCognitoQuery } from './graphql/getUserIdDataAwsCognitoQuery'
 */
export const getUserIdDataAwsCognitoQuery = print(
  getUserIdDataAwsCognitoDocument
)
