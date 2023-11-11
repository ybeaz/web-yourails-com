import { DocumentNode } from '@apollo/client'

import { getRefreshedUserAuthAwsCognitoGql } from './graphql/getRefreshedUserAuthAwsCognitoGql'
import { getRevokedUserAuthAwsCognitoGql } from './graphql/getRevokedUserAuthAwsCognitoGql'
import { getUserIdDataAwsCognitoGql } from './graphql/getUserIdDataAwsCognitoGql'
import { readCompetencyTagsGql } from './graphql/readCompetencyTagsGql'
import { readProfilesGql } from './graphql/readProfilesGql'

export type GraphqlQueriesType = Record<string, DocumentNode>

/**
 * @import import { graphqlQueries } from './index.graphqlQuery'
 */

export const graphqlQueries: GraphqlQueriesType = {
  getRefreshedUserAuthAwsCognitoGql,
  getRevokedUserAuthAwsCognitoGql,
  getUserIdDataAwsCognitoGql,
  readCompetencyTagsGql,
  readProfilesGql,
}
