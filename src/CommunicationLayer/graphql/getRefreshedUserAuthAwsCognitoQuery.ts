import { gql, DocumentNode } from '@apollo/client'
import { print } from 'graphql'

const getRefreshedUserAuthAwsCognitoDocument: DocumentNode = gql`
  query GetRefreshedUserAuthAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputGraphql!
  ) {
    getRefreshedUserAuthAwsCognito(
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
 * @import import { getRefreshedUserAuthAwsCognitoQuery } from './graphql/getRefreshedUserAuthAwsCognitoQuery'
 */
export const getRefreshedUserAuthAwsCognitoQuery = print(
  getRefreshedUserAuthAwsCognitoDocument
)
