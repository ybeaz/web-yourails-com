import { gql, DocumentNode } from '@apollo/client'

export const getRevokedUserAuthAwsCognitoGql: DocumentNode = gql`
  query GetRevokedUserAuthAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
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
