import { axiosClient } from './clients/axiosClient'
import { ConnectorOutputType } from '../Interfaces/ConnectorOutputType'
import { getCompetencyTagsQuery } from './graphql/getCompetencyTagsQuery'

interface ConnectorType {
  (variables: any): ConnectorOutputType
}

/**
 * @description Function to return getCompetencyTagsConnector
 * @import import { getCompetencyTagsConnector } from '../../CommunicationLayer/getCompetencyTagsConnector'
 */
export const getCompetencyTagsConnector: ConnectorType = variables => {
  const obj: ConnectorOutputType = {
    client: axiosClient,
    params: {
      operationName: 'ReadCompetencyTags',
      variables,
      query: getCompetencyTagsQuery,
    },
  }

  return obj
}
