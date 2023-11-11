import { readCompetencyTagsGraphqlDict } from './graphql/readCompetencyTagsGraphqlDict'

type GraphqlQueryType = {}

export type GraphqlQueriesType = Record<string, any>

/**
 * @import import { handleEvents, HandleEventsType } from '../DataLayer/index.handleEvents'
 */

export const graphqlQueries: GraphqlQueriesType = {
  readCompetencyTags: readCompetencyTagsGraphqlDict,
}
