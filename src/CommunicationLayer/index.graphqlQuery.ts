import { DocumentNode } from '@apollo/client'

import { getAuthAwsCognitoUserRefreshedGql } from './query/getAuthAwsCognitoUserRefreshedGql'
import { getAuthAwsCognitoUserRevokedGql } from './query/getAuthAwsCognitoUserRevokedGql'
import { getAuthAwsCognitoUserDataGql } from './query/getAuthAwsCognitoUserDataGql'
import { readCompetencyTagsGql } from './query/readCompetencyTagsGql'
import { readProfilesGql } from './query/readProfilesGql'

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
