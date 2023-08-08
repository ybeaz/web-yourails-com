import { axiosClient } from './clients/axiosClient'
import { ConnectorOutputType } from '../Interfaces/ConnectorOutputType'
import { getUserIdDataAwsCognitoQuery } from './graphql/getUserIdDataAwsCognitoQuery'

interface ConnectorType {
  (variables: any): ConnectorOutputType
}

/**
 * @description Function to return getUserIdDataAwsCognitoConnector
 * @import import { getUserIdDataAwsCognitoConnector } from '../../CommunicationLayer/getUserIdDataAwsCognitoConnector'
 */
export const getUserIdDataAwsCognitoConnector: ConnectorType = variables => {
  const obj: ConnectorOutputType = {
    client: axiosClient,
    params: {
      operationName: 'GetUserIdDataAwsCognito',
      variables,
      query: getUserIdDataAwsCognitoQuery,
    },
  }

  return obj
}
