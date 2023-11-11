import { gql, DocumentNode } from '@apollo/client'

import { GraphqlDictType } from '../../@types/GraphqlDictType'

const operationName: string = 'GetUserIdDataAwsCognito'

const documentNode: DocumentNode = gql`
  query GetUserIdDataAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
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

export const getUserIdDataAwsCognitoGraphqlDict: GraphqlDictType = {
  operationName,
  documentNode,
}
