import { DocumentNode } from '@apollo/client'

import { getAuthAwsCognitoUserRefreshedGql } from './graphql/getAuthAwsCognitoUserRefreshedGql'
import { getAuthAwsCognitoUserRevokedGql } from './graphql/getAuthAwsCognitoUserRevokedGql'
import { getAuthAwsCognitoUserDataGql } from './graphql/getAuthAwsCognitoUserDataGql'
import { readCompetencyTagsGql } from './graphql/readCompetencyTagsGql'
import { readProfilesGql } from './graphql/readProfilesGql'

export type GraphqlQueriesType = Record<string, DocumentNode>

/**
 * @import import { graphqlQueries } from './index.graphqlQuery'
 */

export const graphqlQueries: GraphqlQueriesType = {
  getAuthAwsCognitoUserRefreshedGql,
  getAuthAwsCognitoUserRevokedGql,
  getAuthAwsCognitoUserDataGql,
  readCompetencyTagsGql,
  readProfilesGql,
}
