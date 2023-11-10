import { axiosClient } from './clients/axiosClient'
import { apolloClient } from './clients/apolloClient'
import { ConnectorOutputType } from '../Interfaces/ConnectorOutputType'
import {
  getCompetencyTagsDocument,
  getCompetencyTagsQuery,
} from './graphql/getCompetencyTagsQuery'
import { ClientHttpType } from '../@types/ClientHttpType'

export type GetCompetencyTagsConnectorParamsType = {
  clientType: ClientHttpType
  variables: any
}

interface ConnectorType {
  (params: GetCompetencyTagsConnectorParamsType): ConnectorOutputType
}

/**
 * @description Function to return getCompetencyTagsConnector
 * @import import { getCompetencyTagsConnector } from '../../CommunicationLayer/getCompetencyTagsConnector'
 */
export const getCompetencyTagsConnector: ConnectorType = ({
  clientType,
  variables,
}) => {
  const obj: ConnectorOutputType = {
    client:
      clientType === ClientHttpType['apolloClient']
        ? apolloClient
        : axiosClient,
    clientType,
    params: {
      operationName: 'ReadCompetencyTags',
      variables,
      query:
        clientType === ClientHttpType['apolloClient']
          ? getCompetencyTagsDocument
          : getCompetencyTagsQuery,
    },
  }

  return obj
}
