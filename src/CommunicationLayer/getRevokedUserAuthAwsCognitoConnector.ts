import { axiosClient } from './clients/axiosClient'
import { ConnectorOutputType } from '../Interfaces/ConnectorOutputType'
import { getRevokedUserAuthAwsCognitoQuery } from './graphql/getRevokedUserAuthAwsCognitoQuery'

interface ConnectorType {
  (variables: any): ConnectorOutputType
}

/**
 * @description Function to return getRevokedUserAuthAwsCognitoConnector
 * @import import { getRevokedUserAuthAwsCognitoConnector } from '../../CommunicationLayer/getRevokedUserAuthAwsCognitoConnector'
 */
export const getRevokedUserAuthAwsCognitoConnector: ConnectorType =
  variables => {
    const obj: ConnectorOutputType = {
      client: axiosClient,
      clientType: 'axiosClient',
      params: {
        operationName: 'GetRevokedUserAuthAwsCognito',
        variables,
        query: getRevokedUserAuthAwsCognitoQuery,
      },
    }

    return obj
  }
