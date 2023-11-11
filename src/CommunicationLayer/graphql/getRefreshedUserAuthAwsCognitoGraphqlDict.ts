import { gql, DocumentNode } from '@apollo/client'

import { GraphqlDictType } from '../../@types/GraphqlDictType'

const operationName: string = 'GetRefreshedUserAuthAwsCognito'

const documentNode: DocumentNode = gql`
  query GetRefreshedUserAuthAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
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

export const getRefreshedUserAuthAwsCognitoGraphqlDict: GraphqlDictType = {
  operationName,
  documentNode,
}
