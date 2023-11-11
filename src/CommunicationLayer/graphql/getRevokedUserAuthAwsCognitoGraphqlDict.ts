import { gql, DocumentNode } from '@apollo/client'

import { GraphqlDictType } from '../../@types/GraphqlDictType'

const operationName: string = 'GetRevokedUserAuthAwsCognito'

const documentNode: DocumentNode = gql`
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

export const getRevokedUserAuthAwsCognitoGraphqlDict: GraphqlDictType = {
  operationName,
  documentNode,
}
