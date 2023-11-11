import { GraphqlDictType } from '../@types/GraphqlDictType'

import { getUserIdDataAwsCognitoGraphqlDict } from './graphql/getUserIdDataAwsCognitoGraphqlDict'
import { getRevokedUserAuthAwsCognitoGraphqlDict } from './graphql/getRevokedUserAuthAwsCognitoGraphqlDict'
import { getRefreshedUserAuthAwsCognitoGraphqlDict } from './graphql/getRefreshedUserAuthAwsCognitoGraphqlDict'
import { readCompetencyTagsGraphqlDict } from './graphql/readCompetencyTagsGraphqlDict'
import { readProfilesGraphqlDict } from './graphql/readProfilesGraphqlDict'

export type GraphqlQueriesType = Record<string, GraphqlDictType>

/**
 * @import import { handleEvents, HandleEventsType } from '../DataLayer/index.handleEvents'
 */

export const graphqlQueries: GraphqlQueriesType = {
  readCompetencyTags: readCompetencyTagsGraphqlDict,
  readProfiles: readProfilesGraphqlDict,
  getRefreshedUserAuthAwsCognito: getRefreshedUserAuthAwsCognitoGraphqlDict,
  getRevokedUserAuthAwsCognito: getRevokedUserAuthAwsCognitoGraphqlDict,
  getUserIdDataAwsCognito: getUserIdDataAwsCognitoGraphqlDict,
}
