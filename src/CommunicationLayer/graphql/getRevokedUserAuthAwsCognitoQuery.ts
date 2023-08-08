import { gql, DocumentNode } from '@apollo/client'
import { print } from 'graphql'

const getRevokedUserAuthAwsCognitoDocument: DocumentNode = gql`
  query GetRevokedUserAuthAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputGraphql!
  ) {
    getRevokedUserAuthAwsCognito(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      message
    }
  }
`

/**
 * @import import { getRevokedUserAuthAwsCognitoQuery } from './graphql/getRevokedUserAuthAwsCognitoQuery'
 */
export const getRevokedUserAuthAwsCognitoQuery = print(
  getRevokedUserAuthAwsCognitoDocument
)
