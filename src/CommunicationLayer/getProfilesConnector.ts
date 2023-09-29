import { axiosClient } from './clients/axiosClient'
import { ConnectorOutputType } from '../Interfaces/ConnectorOutputType'
import { getProfilesQuery } from './graphql/getProfilesQuery'

interface ConnectorType {
  (variables: any): ConnectorOutputType
}

/**
 * @description Function to return getProfilesConnector
 * @import import { getProfilesConnector } from '../../CommunicationLayer/getProfilesConnector'
 */
export const getProfilesConnector: ConnectorType = variables => {
  const obj: ConnectorOutputType = {
    client: axiosClient,
    params: {
      operationName: 'ReadProfiles',
      variables,
      query: getProfilesQuery,
    },
  }

  return obj
}
